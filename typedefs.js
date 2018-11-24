/**
 * @typedef {import('mongodb').ObjectId} ObjectId
 */

/**
 * @typedef {object} PartialService
 * @prop {ObjectId | string} _id
 * @prop {string} status
 * @prop {number} basePrice
 * @prop {string[]} categories
 * @prop {object} title
 * @prop {object} subtitle
 * @prop {object} description
 * @prop {object} [ratings]
 * @prop {number} ratings.average
 * @prop {number} ratings.count
 * @prop {(string|ObjectId)[]} tags
 * @prop {object} location
 * @prop {object} location.geo
 * @prop {string} location.geo.type
 * @prop {number[]} location.geo.coordinates
 * @prop {string} location.formattedAddress
 * @prop {string} location.countryCode
 * @prop {boolean} isMostlyAvailable
 * @prop {Date} createdAt
 * @prop {Date} updatedAt
 * @prop {number} __v
 */

/**
 * @typedef {object} IndexableService
 * @prop {string} _id
 * @prop {string} status
 * @prop {number} basePrice
 * @prop {string[]} categories
 * @prop {object} title
 * @prop {object} subtitle
 * @prop {object} description
 * @prop {object} [ratings]
 * @prop {number} ratings.average
 * @prop {number} ratings.count
 * @prop {(string|ObjectId)[]} tags
 * @prop {object} location
 * @prop {object} location.geo
 * @prop {string} location.geo.type
 * @prop {number[]} location.geo.coordinates
 * @prop {string} location.formattedAddress
 * @prop {string} location.countryCode
 * @prop {boolean} isMostlyAvailable
 * @prop {number} createdAt
 * @prop {number} updatedAt
 * @prop {number} __v
 */

/**
 * @typedef {object} EsBulkInsertResult
 * @prop {boolean} errors
 * @prop {number} took
 * @prop {object[]} items
 * @prop {object} items.index
 * @prop {string} items.index._id
 * @prop {string} items.index._type
 * @prop {number} items.index.status
 * @prop {object} [items.index.error]
 * @prop {string} items.index.error.index
 * @prop {string} items.index.error.index_uuid
 * @prop {string} items.index.error.reason
 * @prop {string} items.index.error.shard
 * @prop {string} items.index.error.type exception type "version_conflict_engine_exception"
 */

/**
 * @typedef {object} PartialServiceGroup
 * @prop {ObjectId | string} _id
 * @prop {string} status
 * @prop {string} privacy
 * @prop {object[]} parents
 * @prop {ObjectId | string} parents.serviceGroup
 * @prop {Date} parents.cloneDate
 * @prop {number} basePrice
 * @prop {object} title
 * @prop {object} subtitle
 * @prop {object} description
 * @prop {object} [ratings]
 * @prop {number} ratings.average
 * @prop {number} ratings.count
 * @prop {(string|ObjectId)[]} tags
 * @prop {object} location
 * @prop {object} location.geo
 * @prop {string} location.geo.type
 * @prop {number[]} location.geo.coordinates
 * @prop {string} location.formattedAddress
 * @prop {string} location.countryCode
 * @prop {number} forkedBookingsCount
 * @prop {Date} createdAt
 * @prop {Date} updatedAt
 * @prop {number} __v
 */

/**
 * @typedef {object} IndexableServiceGroup
 * @prop {string} _id
 * @prop {string} status
 * @prop {string} privacy
 * @prop {object[]} parents
 * @prop {ObjectId | string} parents.serviceGroup
 * @prop {number} parents.cloneDate
 * @prop {number} basePrice
 * @prop {object} title
 * @prop {object} subtitle
 * @prop {object} description
 * @prop {object} [ratings]
 * @prop {number} ratings.average
 * @prop {number} ratings.count
 * @prop {(string|ObjectId)[]} tags
 * @prop {object} location
 * @prop {object} location.geo
 * @prop {string} location.geo.type
 * @prop {number[]} location.geo.coordinates
 * @prop {string} location.formattedAddress
 * @prop {string} location.countryCode
 * @prop {number} forkedBookingsCount
 * @prop {number} createdAt
 * @prop {number} updatedAt
 * @prop {number} __v
 */
