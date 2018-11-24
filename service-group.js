const { flatten } = require('./helpers');

/**
 * Removes all fields that are not supposed to be indexed
 * @param {PartialServiceGroup} service
 * @return {IndexableServiceGroup}
 */
function keepOnlyRequiredFields(service) {
  // because the original Service type has a lot more fields
  const parents = service.parents.map(parent => ({
    serviceGroup: parent.serviceGroup.toString(),
    cloneDate: parent.cloneDate.getTime(),
  }));
  return {
    _id: service._id.toString(),
    status: service.status,
    privacy: service.privacy,
    parents,
    basePrice: service.basePrice,
    title: service.title,
    subtitle: service.subtitle,
    description: service.description,
    ratings: service.ratings,
    tags: service.tags,
    location: service.location,
    forkedBookingsCount: service.forkedBookingsCount,
    createdAt: service.createdAt.getTime(),
    updatedAt: service.updatedAt.getTime(),
    __v: service.__v,
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
