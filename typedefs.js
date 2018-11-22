/**
 * @typedef {import('mongodb').ObjectId} ObjectId
 */

/**
 * @typedef {object} PartialService
 * @prop {ObjectId | string} _id
 * @prop {object} title
 * @prop {object} subtitle
 * @prop {object} description
 * @prop {object} location
 * @prop {object} location.geo
 * @prop {string} location.geo.type
 * @prop {number[]} location.geo.coordinates
 * @prop {string} location.formattedAddress
 * @prop {string} location.countryCode
 * @prop {Date} createdAt
 * @prop {Date} updatedAt
 * @prop {number} __v
 */

/**
 * @typedef {object} IndexableService
 * @prop {string} _id
 * @prop {object} title
 * @prop {object} subtitle
 * @prop {object} description
 * @prop {object} location
 * @prop {object} location.geo
 * @prop {string} location.geo.type
 * @prop {number[]} location.geo.coordinates
 * @prop {string} location.formattedAddress
 * @prop {string} location.countryCode
 * @prop {number} createdAt
 * @prop {number} updatedAt
 * @prop {number} __v
 */
