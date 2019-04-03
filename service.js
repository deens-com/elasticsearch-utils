const { flatten, getHeroUrl } = require('./helpers');

/**
 * Removes all fields that are not supposed to be indexed
 * @param {PartialService} service
 * @return {IndexableService}
 */
function keepOnlyRequiredFields(service) {
  // because the original Service type has a lot more fields
  return {
    _id: service._id.toString(),
    status: service.status,
    privacy: service.privacy,
    basePrice: service.basePrice,
    categories: service.categories,
    externalId: service.externalId,
    title: service.title,
    description: service.description,
    subtitle: service.subtitle,
    ratings: service.ratings,
    tags: service.tags,
    location: service.location,
    isMostlyAvailable: service.isMostlyAvailable,
    heroImageUrl: getHeroUrl(service.media),
    payAt: service.checkoutOptions && service.checkoutOptions.payAt,
    createdAt: service.createdAt.getTime(),
    updatedAt: service.updatedAt.getTime(),
    __v: service.__v,
  };
}

/**
 * Converts indexableServices to EsBody
 * @param {IndexableService[]} indexableServices
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
