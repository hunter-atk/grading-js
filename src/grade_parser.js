module.exports = {
  getMovements,
  inDecline
}

function getMovements(grades, i = 1) {
  if(grades.length < 2) return []
  if (i === grades.length - 1) return [getDirection(grades, i)]
  return [getDirection(grades, i)].concat(getMovements(grades, i + 1))
}

function inDecline(grades) {
  return streakOfThree( nonEvenGrades(grades) )
}

// ----------

function nonEvenGrades(grades) {
  return getMovements(grades).filter(nonEven)
}

function getDirection(grades, i) {
  if (grades[i] < grades[i - 1]) return 'down'
  if (grades[i] > grades[i - 1]) return 'up'
  return 'even'
}

function streakOfThree(array) {
  return array.length >= 3 && array.slice(-3).every(isDown)
}

function nonEven(element) {
  return element !== 'even'
}

function isDown(element) {
  return element === 'down'
}
