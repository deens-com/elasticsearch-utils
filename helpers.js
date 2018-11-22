/**
 * @param {Array} array
 * @return {Array}
 */
const flatten = array => array.reduce((a, b) => a.concat(b), []);

module.exports = { flatten };
