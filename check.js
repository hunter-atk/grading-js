const data = require('./data/grades.json')
const gradeParser = require('./src/grade_parser')
let counter = 0

for (var key in data) {
  if (gradeParser.inDecline(data[key])) {
    counter++
  }
}

console.log(`There are ${counter} students in decline`);
