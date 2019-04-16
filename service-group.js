const { flatten, getMaxValue } = require('./helpers');

/**
 * Removes all fields that are not supposed to be indexed
 * @param {PartialServiceGroup} trip
 * @return {IndexableServiceGroup}
 */
function keepOnlyRequiredFields(trip) {
  // because the original Trip type has a lot more fields
  const parents = trip.parents.map(parent => ({
    serviceGroup: parent.serviceGroup.toString(),
    cloneDate: parent.cloneDate.getTime(),
  }));
  const totalDays = getMaxValue(trip.services, serviceOrg => serviceOrg.day);
  /* eslint-disable camelcase */
  const p1_0_0 = findPricingElement(trip, 1, 0, 0);
  const p1_1_0 = findPricingElement(trip, 1, 1, 0);
  const p1_2_0 = findPricingElement(trip, 1, 2, 0);
  const p2_0_0 = findPricingElement(trip, 2, 0, 0);
  const p2_1_0 = findPricingElement(trip, 2, 1, 0);
  const p2_2_0 = findPricingElement(trip, 2, 2, 0);
  /* eslint-enable camelcase */
  return {
    _id: trip._id.toString(),
    status: trip.status,
    privacy: trip.privacy,
    parents,
    totalPrice: trip.totalPrice,
    totalPricePerDay: +(trip.totalPrice / totalDays).toFixed(2),
    bookablePrice: trip.bookablePrice,
    title: trip.title,
    subtitle: trip.subtitle,
    description: trip.description,
    ratings: trip.ratings,
    tags: trip.tags,
    location: trip.location,
    forkedBookingsCount: trip.forkedBookingsCount,
    fastBookable: trip.fastBookable,
    hearts: trip.hearts,
    heroImageUrl:
      trip.media &&
      trip.media[0] &&
      trip.media[0].files &&
      trip.media[0].files.hero &&
      trip.media[0].files.hero.url,
    pricing: { p1_0_0, p1_1_0, p1_2_0, p2_0_0, p2_1_0, p2_2_0 },
    createdAt: trip.createdAt.getTime(),
    updatedAt: trip.updatedAt.getTime(),
    __v: trip.__v,
  };
}

/**
 * Converts indexableServices to EsBody
 * @param {IndexableServiceGroup[]} indexableServices
 * @param {object} indexOptions
 * @param {string} indexOptions._index the _index to index on
 * @param {string} [indexOptions._type] the _type to use
 * @returns {Array}
 */
function generateEsBody(indexableServices, { _index, _type = '_doc' }) {
  const nestedEsBody = indexableServices.map(service => {
    const { _id, ...serviceWithoutId } = service;
    return [
      {
        index: {
          _index,
          _type,
          _id,
          version: service.updatedAt,
          version_type: 'external',
        },
      },
      serviceWithoutId,
    ];
  });
  return flatten(nestedEsBody);
}

/**
 * Finds the price & pricePerDay for given peopleCount from `trip.pricing`
 * @param {PartialServiceGroup} trip
 * @param {number} adultCount
 * @param {number} childrenCount
 * @param {number} infantCount
 */
function findPricingElement(trip, adultCount, childrenCount, infantCount) {
  const pricingElement = (trip.pricing || []).find(
    p =>
      p.adultCount === adultCount &&
      p.childrenCount === childrenCount &&
      p.infantCount === infantCount,
  );
  if (pricingElement)
    return { price: pricingElement.price, pricePerDay: pricingElement.pricePerDay };
  return { price: 0, pricePerDay: 0 };
}

module.exports = { keepOnlyRequiredFields, generateEsBody };
