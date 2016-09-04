var expect = require('expect.js')

describe('my-test', function () {
  it('should pass', function () {
    expect(require('../../backend/SomeService').myFunc()).to.be(2)
  })
})
