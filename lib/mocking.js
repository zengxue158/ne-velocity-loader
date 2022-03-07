let mocking = {}
let isFunction = (obj) => {
  return typeof obj === 'function';
}
mocking.int = (min, max) => {
  if (max == undefined) {
    max = min;
    min = 0;
  }
  return function () {
    return parseInt(Math.random() * (max - min) + min);
  };
};
mocking.inc = (start, step) => {
  start = start || 0;
  step = step || 1;
  return function () {
    return start += isFunction(step) ? step() : step;
  };
};
mocking.float = (min, max, fix) => {
  return function () {
    return parseFloat((Math.random() * (max - min) + min).toFixed(fix || 0));
  };
};
mocking.boolean = (probability) => {
  return function () {
    return Math.random() < (probability >=0 ? probability :  0.5);
  };
};
mocking.string = (length, chars) => {
  let _chars = (chars || 'abcdefghigklmnopqrstuvwxyz').split('')
  let radomint = mocking.int(0, _chars.length);
  return function () {
    let leg = isFunction(length) ? length() : length,
      arr = new Array(leg);
    while (leg > 0) arr[--leg] = _chars[radomint()];
    return arr.join('');
  };
};
mocking.object = (obj) => {
  let keys = Object.keys(obj)
  return function () {
    let result = {}
    keys.forEach(key => {
      result[key] = isFunction(obj[key]) ? obj[key]() : obj[key]
    })
    return result
  }
}
mocking.array = (content, length) => {
  return function () {
    let leg = isFunction(length) ? length() : length
    let arr = new Array(leg)
    while (leg > 0) arr[--leg] = content();
    return arr;
  };
};
mocking.oneof = (candidates) => {
  let randomInt = mocking.int(candidates.length);
  return function () {
    candidates[randomInt()];
  }
};

module.exports = mocking;
