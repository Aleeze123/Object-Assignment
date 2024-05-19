/*Design a type alias named Employee to represent an employee object with properties like
name (string), department (string), and role (string).
2. Include an optional nested object named contact to hold phone and email information (if
provided).
3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or
"Intern".
4. Make the skills property an optional array of strings for listing an employee's skills (if
any)*/
var employee1 = {
    name: "Aleeze",
    department: "Technology Services",
    role: "Intern",
    contact: {
        phone: +921234567890,
        email: "aleeze1710@gmail.com"
    },
    skills: ["Typescript", "Javascript", "Python"]
};
console.log(employee1);
