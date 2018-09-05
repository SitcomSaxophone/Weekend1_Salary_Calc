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

let totalCosts = 0;
let totalMonthlyOutput = '';

function readyNow() {
    $('#submitEmployeeButton').on('click', appendEmployeeInfo);
    $('#employeeInfoTable').on('click', '.deleteEmployeeButton', deleteEmployee);
} // end readyNow 

// Function to append table elements to the DOM
function appendEmployeeInfo() {
    $('#totalCostOutput').empty(); // empties output page element

    let employeeFirst = $('#firstNameInput').val(); // These variables would be redundant if we were using 
    let employeeLast = $('#lastNameInput').val(); // object literal notation.
    let employeeID = $('#employeeIDInput').val(); //
    let employeeJob = $('#jobTitleInput').val(); //
    let employeeSalary = $('#annualSalaryInput').val(); //

    employees.push(new Employee(employeeFirst, employeeLast, employeeID, employeeJob, employeeSalary));
    
    $('#employeeInfoTable').append(`
    <tr>
                <td>` + employeeFirst + `</td>
                <td>` + employeeLast + `</td>
                <td>` + employeeID + `</td>
                <td>` + employeeJob + `</td>
                <td>` + employeeSalary + `</td>
                <td><button class="deleteEmployeeButton">Delete</button></td>
            </tr>
    `) // appends table elements to DOM

    calculateMonthlyCosts();
    $('#totalCostOutput').append(totalMonthlyOutput); // appends monthly costs to DOM

    $('#firstNameInput').val(''); // empties the inputs after button click
    $('#lastNameInput').val('');  //
    $('#employeeIDInput').val(''); //
    $('#jobTitleInput').val(''); //
    $('#annualSalaryInput').val(''); // 
} // end appendEmployeeInfo

// Function to calculate monthly costs. If the total monthly cost exceeds  
// $20,000, add a red background color to the total monthly cost.
function calculateMonthlyCosts() {
    totalMonthlyOutput = 'Total Monthly Costs: $'; // Would be more concise if utilizing information from an array,
    let newEmployeeSalary = $('#annualSalaryInput').val(); // a for-of loop would be clean for the scope of this assignment, 
    totalCosts = totalCosts + (newEmployeeSalary / 12); // see HTML comment regarding a span element for appending the monthly
    if (totalCosts > 20000) { //
        $('#totalCostOutput').css('background-color', 'red'); // cost output to the DOM
    } //
    totalMonthlyOutput = totalMonthlyOutput + totalCosts.toFixed(2); //
} // end calculateMonthly Costs

//function to delete employee data row
function deleteEmployee() {
    $(this).parents()[1].remove();
} // end deleteEmployee
