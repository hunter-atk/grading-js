exports.getMovements = function getMovements(grades, i = 1) {
  if(grades.length < 2) return [];

  if (i === grades.length - 1) {
    return [getDirection(grades, i)];
  } else {
    return [getDirection(grades, i)].concat(getMovements(grades, i + 1));
  }
}

function getDirection(grades, i) {
  if (grades[i] < grades[i - 1]) return 'down'
  else if (grades[i] > grades[i - 1]) return 'up'
  return 'even'
}

exports.inDecline = function (grades) {
  let movements = this.getMovements(grades)
  let counter = 0
  for (var i = movements.length; i--;) {
    if (movements[i] == 'down') counter++
    if (movements[i] == 'up') counter = 0
    if (counter === 3) return true
  }
  return false
}
