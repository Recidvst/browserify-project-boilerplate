
// object test
const isObject = function (a) {
  return (!!a) && (a.constructor === Object);
};

// array test
const isArray = function (a) {
  return (!!a) && (a.constructor === Array);
};

// boolean test
const isBool = function (a) {
  return typeof a === 'boolean';
};

module.exports = {
  isObject,
  isArray,
  isBool
}