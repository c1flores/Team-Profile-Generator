
const Employee = require ('../lib/Employee');
const Engineer = require('../lib/Engineer');

//test to see if engineer object is created
test('creates an employee object', () => {
    const engineer = new Engineer('Christian');
});

//test to see if engineer object uses constructor to configure GitHub account property
test('set a GitHub account with the constructor', () => {
    const testValue = 'GitHub Account';
    const eng = new Engineer('Foo', 1, 'eng@gmail.com', testValue);
    expect(eng.github).toBe(testValue);
});

//test to see if engineer object uses constructor to implement getGitHub() method properly
test('retrieve GitHub account with getGitHub() method', () => {
    const testValue = 'GitHub Account';
    const eng = new Engineer('Foo', 1, 'eng@gmail.com', testValue);
    expect(eng.getGitHub()).toBe(testValue);
});

//test to see if engineer object uses constructor to implement getRole() method properly
test('verify if getRole() returns Engineer', () => {
    const testValue = 'Engineer';
    const eng = new Engineer('Foo', 1, 'eng@gmail.com', 'GitHub Account');
    expect(eng.getRole()).toBe(testValue);
});