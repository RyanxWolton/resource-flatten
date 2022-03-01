const assert = require('assert')

function flatten(arr) {
  if (!Array.isArray(arr)) return arr
}

// Should not alter the input if it is not an array
assert.strictEqual(5, flatten(5))
const obj = { value1: 1, value2: 2 }
assert.strictEqual(obj, flatten(obj))