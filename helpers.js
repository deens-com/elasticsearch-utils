/**
 * @param {Array} array
 * @return {Array}
 */
const flatten = array => array.reduce((a, b) => a.concat(b), []);

/**
 * Returns the max value out of an array
 * @param {Array} array
 * @param {(value: any) => any} getValue
 */
function getMaxValue(array, getValue) {
  const values = array.map(getValue);
  return Math.max(...values, 1);
}

/**
 * Extracts a hero URL from media objects
 * @param {MediaObject[]} media
 */
const getHeroUrl = media => {
  const heroMediaObject = media.find(m => m.hero);
  if (heroMediaObject) {
    return (
      heroMediaObject.files && heroMediaObject.files.original && heroMediaObject.files.original.url
    );
  }
  return media[0] && media[0].files && media[0].files.original && media[0].files.original.url;
};

const MINUTES_IN_A_DAY = 1440;

module.exports = { flatten, getMaxValue, getHeroUrl, MINUTES_IN_A_DAY };
