class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    //DEFINE A PROPERTY THAT CALLS A FUNCTION USING "get"
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    promote(newJobTitle, newPayRate){
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
    }
}

/* Test */

//CREATE A NEW INSTANCE OF EMPLOYEE AND ASSIGN TO LOCAL VARIABLE
let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50); 
//ACCESS A PROPERTY AND PRINT IT IN A TEMPLATE STRING
console.log(`Employee ${employee1.firstName} created`);

//NEXT
//ORIGINAL console.log(`Employee ${employee1.fullName} created`):
console.log(`Employee ${employee1.getFullName()} created`);

console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

//SECOND EMPLOYEE
let employee2 = new Employee(2, "Bob", "Ross", "Greek at Large", 120.00);
console.log(`Employee ${employee2.getFullName()} created`);
console.log(`Job title is ${employee2.jobTitle}`);
console.log(`Pay rate is $${employee2.payRate}`);

//EXERCISE 2 TEST OUTPUT
employee1.promote("Sr. Graphic Artist", 46.75);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);