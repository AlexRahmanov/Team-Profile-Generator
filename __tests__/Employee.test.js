const Employee = require("../lib/Employee");

// creates employee object
test("creates an employee object", () => {
  const employee = new Employee("New-User1", 90, "New-User1@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// gets employee name
test("gets employee name", () => {
  const employee = new Employee("New-User2", 90, "New-User2@gmail.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

// gets employee ID
test("gets employee ID", () => {
  const employee = new Employee("New-User3", 90, "New-User3@gmail.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

// gets employee email
test("gets employee email", () => {
  const employee = new Employee("New-User4", 90, "New-User4@gmail.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

// ggets role of employee
test("gets role of employee", () => {
  const employee = new Employee("New-User5", 90, "New-User5@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});