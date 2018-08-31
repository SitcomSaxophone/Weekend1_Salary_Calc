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
let newEmployee = new Employee($('#firstNameInput').val(), $('#lastNameInput').val(), $('#employeeIDInput').val(),
    $('#jobTitleInput').val(), $('#annualSalaryInput').val()); // end newEmployee variable


function readyNow() {
    console.log('jq');
    submitEmployee();
} // end readyNow 

// Function to append table elements to the DOM
function submitEmployee() {
    $('#submitEmployeeButton').on('click', submitButtonClick);
    
}
function submitButtonClick() {
    console.log('clicked');
    employees.push(newEmployee);
    $('tbody').append(`
    <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>50</td>
            </tr>
    `)
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#employeeIDInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val(''); // empties the inputs after button click
} // end submitButtonClick
