const hello = require('./hello')

test('hello', () => {
  //arrange
  let name = 'Ball'

  //act
  let result = hello(name)

  //assert
  expect(result).toBe('Hello Ball')
})
