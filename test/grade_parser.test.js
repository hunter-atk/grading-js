const expect = require('chai').expect
const gradeParser = require('../src/grade_parser')

describe("gradeParser", function() {

  it("returns an array of up/down/even for the given array", function() {
    var result = gradeParser.getMovements([6,3,5,4,3,4,4,5]);

    expect(result).to.deep.equal(["down","up","down","down","up","even","up"]);
  });

});
