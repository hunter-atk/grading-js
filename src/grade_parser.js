exports.getMovements = function (grades) {
  let gradeStats = [];
  for (let i=0; i<grades.length-1; i++){
     let next = i+1;
     if(grades[i] == grades[next]){
        gradeStats.push("even");
     } else if (grades[i] > grades[next]){
        gradeStats.push("down");
     } else {
        gradeStats.push("up");
     }
  }
  return gradeStats;
}

exports.inDecline = function (grades) {
  let gradeStats = [];
  for (let i=0; i<grades.length-1; i++){
     let next = i+1;
     if(grades[i] == grades[next]){
        gradeStats.push("even");
     } else if (grades[i] > grades[next]){
        gradeStats.push("down");
     } else {
        gradeStats.push("up");
     }
  }

  let filteredArray = gradeStats.filter(word => word != 'even');
  if (filteredArray.length >= 3){
    for (let i=filteredArray.length-3; i<filteredArray.length; i++){
       if (filteredArray[i] == 'up'){
          return false;
       }
    }
    return true;
  } else {
    return false;
  }
}



const getGrades = require ('../data/grades.json');
let studentsInDecline = 0;
let studentsNotInDecline = 0;
for (let property1 in getGrades) {
  if (exports.inDecline(getGrades[property1]) == false) {
    studentsNotInDecline++;
  } else {
    studentsInDecline++;
  }
}
console.log('Students in decline: ' + studentsInDecline + '. ' + 'Students NOT in decline: ' + studentsNotInDecline + '.' );
