$(document).ready(readyNow); // end doc ready

// class Employee {
//     constructor(firstName, lastName, idNumber, jobTitle, annualSalary) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.idNumber = idNumber;
//         this.jobTitle = jobTitle;
//         this.annualSalary = annualSalary;
//     }
// } // end Employee class constructor

//let employees = []; // array of employees
//const newEmployee = new Employee($('#firstNameInput').val(), $('#lastNameInput').val(), $('#employeeIDInput').val(),
//   $('#jobTitleInput').val(), $('#annualSalaryInput').val()); // end newEmployee variable
let totalCosts = 0;
let totalMonthlyOutput = '';

function readyNow() {
    submitEmployee();
} // end readyNow 

// Function to append table elements to the DOM
function submitEmployee() {
    $('#submitEmployeeButton').on('click', appendEmployeeInfo);
} // end submitEmployee

function appendEmployeeInfo() {
    $('#totalCostOutput').empty();

    let employeeFirst = $('#firstNameInput').val();
    let employeeLast = $('#lastNameInput').val();
    let employeeID = $('#employeeIDInput').val();
    let employeeJob = $('#jobTitleInput').val();
    let employeeSalary = $('#annualSalaryInput').val();
    // employees.push(new Employee($('#firstNameInput').val(), $('#lastNameInput').val(), $('#employeeIDInput').val(),
    // $('#jobTitleInput').val(), $('#annualSalaryInput').val()));
    $('tbody').append(`
    <tr>
                <td>` + employeeFirst + `</td>
                <td>` + employeeLast + `</td>
                <td>` + employeeID + `</td>
                <td>` + employeeJob + `</td>
                <td>` + employeeSalary + `</td>
            </tr>
    `)

    calculateMonthlyCosts();
    $('#totalCostOutput').append(totalMonthlyOutput);

    $('#firstNameInput').val(''); // empties the inputs after button click
    $('#lastNameInput').val('');  //
    $('#employeeIDInput').val(''); //
    $('#jobTitleInput').val(''); //
    $('#annualSalaryInput').val(''); // 
} // end appendEmployeeInfo

// Using the stored information, calculate monthly costs and
// append this to the to DOM. If the total monthly cost exceeds  
// $20,000, add a red background color to the total monthly cost.
function calculateMonthlyCosts() {
    totalMonthlyOutput = 'Total Monthly Costs: $'; 
    let employeeSalary = $('#annualSalaryInput').val();
    totalCosts = totalCosts + (employeeSalary / 12);
    if (totalCosts > 20000) {
        $('#totalCostOutput').css('color', 'red');
    }
    totalMonthlyOutput = totalMonthlyOutput + totalCosts.toFixed(2);
    return totalMonthlyOutput;
} // end calculateMonthly Costs

