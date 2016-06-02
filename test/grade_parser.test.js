const expect = require('chai').expect
const gradeParser = require('../src/grade_parser')

describe("gradeParser", function() {

  describe("#getMovements", function() {
    it("returns an array of up/down/even for the given array", function() {
      var result = gradeParser.getMovements([6,3,5,4,3,4,4,5]);

      expect(result).to.deep.equal(["down","up","down","down","up","even","up"]);
    });

    it("returns an emtpy array when given an array of 0 or 1 elements", function() {
      expect(gradeParser.getMovements([])).to.deep.equal([])
      expect(gradeParser.getMovements([7])).to.deep.equal([])
    });
  });

  describe("#inDecline", function() {
    it("returns false for arrays with a length of 0 or 1", function() {
      expect(gradeParser.inDecline([])).to.eq(false);
      expect(gradeParser.inDecline([8])).to.eq(false);
    });

    it("returns true if the last 3 grades are downs", function() {
      expect(gradeParser.inDecline([5,4,3,2])).to.eq(true);
    });

    it("returns true if the last grades are 3 downs separated evens", function() {
      expect(gradeParser.inDecline([5,5,4,4,3,3,2,2])).to.eq(true);
      expect(gradeParser.inDecline([5,4,4,3,2,2])).to.eq(true);
      expect(gradeParser.inDecline([5,5,4,3,3,3,3,3,2,1])).to.eq(true);
      expect(gradeParser.inDecline([10, 10, 10, 9, 9, 8, 8, 8, 8, 7])).to.eq(true);
      expect(gradeParser.inDecline([76,62,7,7,1])).to.eq(true);
    });

    it("returns false if there are fewer than 3 downs", function() {
      expect(gradeParser.inDecline([5,4,3])).to.eq(false);
      expect(gradeParser.inDecline([5,5,4,4,3,3])).to.eq(false);
      expect(gradeParser.inDecline([5,5,4,4,5,3,2])).to.eq(false);
      expect(gradeParser.inDecline([ 71, 4, 27, 21, 69, 62, 65, 64, 38, 35, 41, 19 ])).to.eq(false);
    });
  });

});
