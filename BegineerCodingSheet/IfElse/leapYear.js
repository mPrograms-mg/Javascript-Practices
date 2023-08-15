const year = prompt("Enter The Year");

// if (year % 4 === 0) {
//   if (year % 100 !== 0) {
//     if (year % 400 === 0) {
//       console.log("This is Leap Year", year);
//     }
//   } else {
//     console.log("This  is Not Leap Year");
//   }
// } else {
//   console.log("dd");
// }

function LeapYear(year) {
  if (year % 4 == 0 && (year % 400 == 0 || year % 100 !== 0)) {
    console.log("This is Leap Year", year);
  } else {
    console.log("This  is Not Leap Year");
  }
}

LeapYear(year);
