/**
 * Removes all fields that are not supposed to be indexed
 * @param {PartialService} service
 * @return {IndexableService}
 */
function keepOnlyRequiredFields(service) {
  // because the original Service type has a lot more fields
  return {
    _id: service._id.toString(),
    title: service.title,
    description: service.description,
    subtitle: service.subtitle,
    location: service.location,
    createdAt: service.createdAt.getTime(),
    updatedAt: service.updatedAt.getTime(),
    __v: service.__v,
  };
}

module.exports = { keepOnlyRequiredFields };
