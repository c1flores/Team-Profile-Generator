const Employee = require ('..lib/Employee');
const Manager = require('../lib/Manager');

//test to see if manager object is created
test('creates an intern object', () => {
    const manager = new Manager('Alex');
});

//test to see if manager object uses constructor to configure office number property
test('set an office number with the constructor', () => {
    const testValue = 111;
    const boss = new Manager('Foo', 1, 'manager@gmail.com', testValue);
    expect(boss.officeNumber).toBe(testValue);
});

//test to see if manager object uses constructor to implement getOfficeNumber() method properly
test('retrieve office number with the getOfficeNumber() method', () => {
    const testValue = 111;
    const boss = new Manager('Foo', 1, 'manager@gmail.com', testValue);
    expect(boss.getOfficeNumber()).toBe(testValue);
});

//test to see if manager object uses constructor to implement getRole() method properly
test('verify if getRole() returns Manager', () => {
    const testValue = 'Manager';
    const boss = new Manager('Foo', 1, 'manager@gmail.com', 100);
    expect(boss.getRole()).toBe(testValue);
});