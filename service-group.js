const { flatten, getMaxValue, getHeroUrl, MINUTES_IN_A_DAY } = require('./helpers');

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
  const daysInServices = getMaxValue(trip.services, serviceOrg => serviceOrg.day);
  const daysInDuration = Math.ceil(trip.duration / MINUTES_IN_A_DAY);
  const totalDays = Math.max(daysInServices, daysInDuration);
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
    heroImageUrl: getHeroUrl(trip.media),
    moderationStatus: trip.moderationStatus,
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

module.exports = { keepOnlyRequiredFields, generateEsBody };
