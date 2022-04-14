'use strict';

function getFryingTime(cutletsAmount, panCapacity, tps) {
  return Math.ceil((cutletsAmount * 2) / panCapacity) * tps;
}

module.exports = { getFryingTime };
