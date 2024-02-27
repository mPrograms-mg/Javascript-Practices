// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"


const day = new Date("10/11/2009");
const day2 = new Date("11/10/2010");

const DayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


console.log(day.getDay());

console.log(day2.getDay());


function getDayName(dateString) {
    let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let Days  = new Date(dateString)
    let DayNumber = Days.getDay()
    console.log("Days...",DayNumber);
    console.log(dayName[DayNumber]);

    return dayName[DayNumber];
}

console.log(getDayName("11/10/2010"));

