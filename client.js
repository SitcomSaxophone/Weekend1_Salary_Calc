$(document).ready(readyNow); // end doc ready

class Employee {
    constructor(firstName, lastName, idNumber, jobTitle, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.jobTitle = jobTitle;
        this.annualSalary = annualSalary;
    }
} // end Employee class constructor

let employees = []; // array of employees

function readyNow () {
    console.log('jq');
} // end readyNow 

// Function to append table elements to the DOM
function submitEmployee() {
    
}