const assert = require('assert')

function flatten(input) {
  if (!Array.isArray(input)) return input

  return input.reduce((previous, current) => { 
    return previous.concat(Array.isArray(current) ? flatten(current) : current)
  }, [])
}

// Should not alter the input if it is not an array
assert.strictEqual(5, flatten(5))
const obj = { value1: 1, value2: 2 }
assert.strictEqual(obj, flatten(obj))
assert.strictEqual(undefined, flatten(undefined))

// Should handle any array
assert.deepEqual([], flatten([]))
assert.deepEqual([1, 2, 3, 4], flatten([1, 2, 3, 4]))
assert.deepEqual([1, 2, 3, 4, 3, 4 ,5], flatten([1, [2, 3], 4, [3, [4, [5]]]]))
assert.deepEqual([1, 2, 3], flatten([1, [[[2, 3]]]]))

// Should handle arrays with elements of any type
const objectArray = [{ value1: 1, value2: 2  }]
assert.deepEqual(objectArray, flatten(objectArray))
const mixedArray = ['one', [[1]], [{}, { value: 1 }, null], [[[[[[[[[NaN]]]]]]]]]]
const mixedResult = ['one', 1, {}, { value: 1 }, null, NaN]
assert.deepEqual(mixedResult, flatten(mixedArray))