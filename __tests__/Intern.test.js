
const Employee = require ('../lib/Employee');
const Intern = require('../lib/Intern');

//test to see if intern object is created
test('creates an intern object', () => {
    const intern = new Intern('TJ');
});

//test to see if intern object uses constructor to configure school property
test('set a school with the constructor', () => {
    const testValue = 'Stanford';
    const temp = new Intern('Foo', 1, 'temp@gmail.com', testValue);
    expect(temp.school).toBe(testValue);
});

//test to see if intern object uses constructor to implement getSchool() method properly
test('retrieve school with getSchool() method', () => {
    const testValue = 'Stanford';
    const temp = new Intern('Foo', 1, 'temp@gmail.com', testValue);
    expect(temp.getSchool()).toBe(testValue);
});

//test to see if intern object uses constructor to implement getRole() method properly
test('verify if getRole() returns Intern', () => {
    const testValue = 'Intern';
    const temp = new Intern('Foo', 1, 'temp@gmail.com', 'Stanford');
    expect(temp.getRole()).toBe(testValue);
});