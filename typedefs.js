/**
 * @typedef {import('mongodb').ObjectId} ObjectId
 */

/**
 * @typedef {object} PartialService
 * @prop {ObjectId | string} _id
 * @prop {string} status
 * @prop {string} privacy
 * @prop {object} basePrice
 * @prop {"per-head" | "per-session"} basePrice.payPer
 * @prop {string} basePrice.priceType
 * @prop {number} basePrice.perAdult
 * @prop {number} basePrice.perChild
 * @prop {number} basePrice.perSession
 * @prop {string[]} categories
 * @prop {string} externalId
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
 * @prop {MediaObject[]} media
 * @prop {{payAt: string} | undefined} checkoutOptions
 * @prop {object | undefined} accommodationProps
 * @prop {number} accommodationProps.stars
 * @prop {ObjectId} accommodationProps.amenities
 * @prop {Date} createdAt
 * @prop {Date} updatedAt
 * @prop {number} __v
 */

/**
 * @typedef {object} IndexableService
 * @prop {string} _id
 * @prop {string} status
 * @prop {string} privacy
 * @prop {number} basePrice
 * @prop {string[]} categories
 * @prop {string} externalId
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
 * @prop {string} heroImageUrl
 * @prop {string | undefined} payAt
 * @prop {number} accommodationStars
 * @prop {string[]} accommodationAmenities
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
 * @prop {number} totalPrice
 * @prop {number} bookablePrice
 * @prop {number} duration
 * @prop {object} title
 * @prop {object} subtitle
 * @prop {object} description
 * @prop {object} [ratings]
 * @prop {number} ratings.average
 * @prop {number} ratings.count
 * @prop {(string|ObjectId)[]} tags
 * @prop {object[]} services
 * @prop {ObjectId | string} services.service
 * @prop {number} services.day
 * @prop {object} location
 * @prop {object} location.geo
 * @prop {string} location.geo.type
 * @prop {number[]} location.geo.coordinates
 * @prop {string} location.formattedAddress
 * @prop {string} location.countryCode
 * @prop {number} forkedBookingsCount
 * @prop {boolean} fastBookable
 * @prop {number} hearts
 * @prop {MediaObject[]} media
 * @prop {string} moderationStatus
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
 * @prop {number} totalPrice
 * @prop {number} totalPricePerDay
 * @prop {number} bookablePrice
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
 * @prop {boolean} fastBookable
 * @prop {string} heroImageUrl
 * @prop {number} hearts
 * @prop {string} moderationStatus
 * @prop {number} createdAt
 * @prop {number} updatedAt
 * @prop {number} __v
 */

/**
 * @typedef {object} MediaObject
 * @prop {MediaFiles} files
 * @prop {boolean} hero
 */

/**
 * @typedef {object} MediaImage
 * @prop {string} url
 * @prop {number} height
 * @prop {number} width
 */

/**
 * @typedef {object} MediaFiles
 * @prop {MediaImage?} hero
 * @prop {MediaImage?} large
 * @prop {MediaImage?} small
 * @prop {MediaImage?} thumbnail
 * @prop {MediaImage} original
 */
