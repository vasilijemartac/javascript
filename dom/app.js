// function findMissingLetter(array)
// {
//     let letterArr = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
//     let letterSlice = letterArr.slice(letterArr.indexOf(array[0]), letterArr.indexOf(array[array.length - 1]) + 1);

//     let missingLetter = letterSlice.find((e, i) => e !== array[i]);

//     return missingLetter;
// }

// console.log(findMissingLetter(["a","b","c","d","f"]))


// const students =[
//     {name:"Alice",scores:[90,85,92]},
//     {name:"Bob",scores:[75,80,85]},
//     {name:"Charlie",scores:[90,95,85]},
//     {name:"David",scores:[100,100,50]},

// ]

// function student(arr){
//         return student.scores.filter((acc, score) => acc + score).filter(student => student.average > 90).student.name, sum / student.scores.length ;
        
//       };
//  console.log( student(students) )

// const students = [
//     { name: "Alice", scores: [90, 85, 92] },
//     { name: "Bob", scores: [75, 80, 85] },
//     { name: "Charlie", scores: [90, 95, 85] },
//     { name: "Jack", scores: [100, 100, 100] }
//   ];
  

  
//   const studentGrades = students.filter(student => student.grade >= 90);
//   const sum = students.reduce((acc, score) => acc + score);
//   return studentGrades;