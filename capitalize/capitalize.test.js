const capitalize = require('./capitalize')

it ('Capitalizes a string', () => {
  expect(capitalize('shola')).toBe('Shola')
})

it ('Capitalizes a string of any with mixed cases', () => {
  expect(capitalize('bkhbvbvbbuJHVHVhdbfjvhbejhr')).toBe('Bkhbvbvbbujhvhvhdbfjvhbejhr')
})

