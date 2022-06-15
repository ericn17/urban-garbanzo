// Employee constructor
const Employee = require ('../lib/Employee');

// creates employee object
test('create an employee object', () => {
  const employee = new Employee('Eric', '001', '15eng4@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
});

// get id
test('gets employee name', () => {
  const employee = new Employee('Eric', '001', '15eng4@gmail.com');

  expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', () => {
  const employee = new Employee('Eric', '001', '15eng4@gmail.com');

  expect(employee.getId()).toEqual(expect.any(String));
});

test('gets employee email', () => {
  const employee = new Employee('Eric', '001', '15eng4@gmail.com');

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets employee role', () => {
  const employee = new Employee('Eric', '001', '15eng4@gmail.com');

  expect(employee.getRole()).toEqual("Employee");
});

