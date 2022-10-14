const Employee = require ('../lib/Employee');

//test to see if employee object is created
test('creates an employee object', () => {
    const employee = new Employee('Gustavo');
});

//test to see if employee object uses constructor to configure id property
test('set an id with constructor', () => {
    const testValue = 100;
    const emp = new Employee('Foo', testValue);
    expect(emp.id).toBe(testValue);
});

//test to see if employee object uses constructor to configure email property
test('set email with constructor', () => {
    const testValue = 'emp@gmail.com';
    const emp = new Employee('Foo', 1, testValue);
    expect(emp.email).toBe(testValue);
});

//test to see if employee object uses constructor to implement getRole() method properly
test('verify if getRole() returns Employee', () => {
    const testValue = 'Employee';
    const emp = new Employee('Gustavo', 1, 'emp@gmail.com');
    expect(emp.getRole()).toBe(testValue);
});







