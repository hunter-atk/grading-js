exports.getMovements = function (grades) {
  let result = []
  for (var i = 1; i < grades.length; i++) {
    if (grades[i] < grades[i - 1]) {
      result.push('down')
    } else if (grades[i] > grades[i - 1]) {
      result.push('up')
    } else {
      result.push('even')
    }
  }
  return result;
}

exports.inDecline = function (grades) {
  let movements = this.getMovements(grades)
  let counter = 0
  for (var i = movements.length; i--;) {
    if (movements[i] == 'up' && counter < 3) return false
    if (movements[i] == 'down') counter++
    if (counter === 3) return true
  }
  return false
}
