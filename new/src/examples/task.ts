// Question 1

const studentName: string = "Rahul";
const org: string = "Computer Science";

let tamil: number = 85;
let english: number = 78;
let mathematics: number = 92;
let science: number = 88;
let social: number = 76;

// BUG 1: Mathematics mark is missing
let totalMarks: number =
    tamil +
    english +
    mathematics +
    science +
    social;

    let average: number = totalMarks / 5; 
// BUG 2: Wrong divisor

console.log("Student Name :", studentName);
console.log("Department :", org);
console.log("Total Marks :", totalMarks);
console.log("Average :", average);

if (average >= 80 && totalMarks >= 400) {
    console.log("Grade : A");
} else {
    console.log("Grade : B");
}

// BUG 4: Average should increase, but decreased
average = average + 2;

console.log("Updated Average :", average);

if (average >=90) {
    console.log("Outstanding Performance");
} else {
    console.log("Good Performance");
}

console.log("Assessment Completed");

let employeeName: string = "Alex";
let employeeId: number = 1001;
let department: string = "Software Testing";

let basicpay: number = 25000;
let hra: number = 5000;
let bonus: number = 3000;
let tax: number = 2000;

// BUG 1: Bonus not added
let salary: number = basicpay + hra + bonus;

// BUG 2: Tax added instead of deducted
let netSalary: number = salary - tax;

console.log("Employee Name :", employeeName);
console.log("Employee ID :", employeeId);
console.log("Department :", department);
console.log("Basic Salary :", basicpay);
console.log("HRA :", hra);
console.log("Bonus :", bonus);
console.log("Tax :", tax);
console.log("Gross Salary :", salary);
console.log("Net Salary :", netSalary);

// BUG 3: Wrong eligibility condition
if (netSalary >= 30000) {
    console.log("Promotion Status : Eligible");
} else {
    console.log("Promotion Status : Not Eligible");
}

// BUG 4: Wrong increment amount
netSalary = netSalary + 5000;

console.log("Salary After Increment :", netSalary);

// BUG 5: Wrong grade condition
if (netSalary >=35000) {
    console.log("Performance Grade : A");
} else {
    console.log("Performance Grade : B");
}

// BUG 6: Wrong experience value
let experience: number = 5;

console.log("Experience :", experience);

// BUG 7: Wrong experience check
if (experience <=10) {
    console.log("Senior Employee");
} else {
    console.log("Junior Employee");
}

// BUG 8: Wrong attendance percentage
let attendance: number = 80;

console.log("Attendance :", attendance);

// BUG 9: Invalid attendance condition
if (attendance <=75) {
    console.log("Attendance Status : Fail");
} else {
    console.log("Attendance Status : Pass");
}

// BUG 10: Wrong final message
console.log("Employee assesment Successfully");

// Question 3
// Fill in the Missing Code

const companyName: string = "OpenAI";
const ID: number = 101;
const basicSalary: number = 28000;
const rent : number = 4000;
const medicalAllowance: number = 2000;

// Missing Line 1
const grossSalary: number = basicSalary+rent+medicalAllowance;

console.log("Company Name :", companyName);
console.log("Employee ID :", employeeId);
console.log("Basic Salary :", basicSalary);
console.log("HRA :", rent);
console.log("Medical Allowance :", medicalAllowance);
console.log("Gross Salary :", grossSalary);

// Missing Line 2
if (grossSalary >=30000) {
    console.log("Salary Grade : A");
} else {
    console.log("Salary Grade : B");
}

// Missing Line 3
const employee = {
    id: 101,
    name: "Alex",
    salary: 34000
};

console.log("Employee ID :", employee.id);
console.log("Employee Name :", employee.name);
console.log("Current Salary :", employee.salary);

// Missing Line 4
const updatedsalary=grossSalary+3000;

console.log("Updated Salary :", employee.salary);

// Missing Line 5
const annualSalary = grossSalary*12;

console.log("Annual Salary :", annualSalary);

// Missing Line 6
if (grossSalary >=40000) {
    console.log("Bonus : Eligible");
} else {
    console.log("Bonus : Not Eligible");
}

// Missing Line 7
const deduction = 2000;

console.log("Tax Amount :", deduction);

// Missing Line 8
const finalsalary = grossSalary-tax;

console.log("Net Salary :", finalsalary);

// Missing Line 9
if (netSalary >=40000) {
    console.log("Performance Rating : Excellent");
} else {
    console.log("Performance Rating : Good");
}

// Missing Line 10
console.log("Final Employee Salary :", netSalary);

console.log("Interview Completed");

//output

// Company Name : OpenAI
// Employee ID : 101
// Basic Salary : 28000
// HRA : 4000
// Medical Allowance : 2000
// Gross Salary : 34000
// Salary Grade : B
// Employee ID : 101
// Employee Name : Alex
// Current Salary : 34000
// Updated Salary : 37000
// Annual Salary : 444000
// Bonus : Not Eligible
// Tax Amount : 3700
// Net Salary : 33300
// Performance Rating : Good
// Final Employee Salary : 33300
// Interview Completed


//--------------------------------------------------
// Question 4

// Question 4 - Find and Fix the Bugs

const emp: string = "Alex";
let totalSalary: number = 30000;
let completedTasks: number = 0;
let totalBonus: number = 0;
const workingDays: number = 5;

console.log("EmployeeName :", emp);

for (let day = 1; day <= workingDays; day++) {

    console.log("-------------------------");
    console.log("Working Day :", day);
}

    // BUG 1: Tasks are decreased instead of increased
    completedTasks = completedTasks + 2;

    console.log("Completed Tasks :", completedTasks);

    // BUG 2: Wrong condition
    if (completedTasks >= 6) {

        // BUG 3: Wrong bonus amount
        totalBonus = totalBonus + 500;

        console.log("Daily Bonus : 500");

    } else {

        // BUG 4: Wrong bonus calculation
        totalBonus = totalBonus + 1000;

        console.log("Daily Bonus : 1000");

    }


console.log("-------------------------");
console.log("Total Bonus :", totalBonus);

// BUG 5: Bonus deducted instead of added
totalSalary = totalSalary + totalBonus;

console.log("Updated Salary :", totalSalary);

// BUG 6: Wrong logical operator
if (
    totalSalary >= 35000 &&
    completedTasks >= 10
) {

    console.log("Performance : Excellent");

} else {

    console.log("Performance : Good");

}

// BUG 7: Incorrect final message
console.log("Interview Passed");