const age = 70;

if (age >= 18) {
    console.log("you can vote");
    
   if (age > 60) {
    console.log("you vote again");
   }

} else {
    console.log("you cannot vote");
}

console.log("execute always");


if (marks >= 90) {
    console.log("A+");
} else if (marks > 80) {
    console.log("A");
} else if (marks > 70) {
    console.log("B");
} else if (marks > 60) {
    console.log("C");
} else {
    console.log("Low marks");
}

const marks = 10;

const result = marks >= 40 ? "passed" : "failed";
