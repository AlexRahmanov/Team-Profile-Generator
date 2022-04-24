const Manager = require("../lib/Manager");

// creates an Manager object
test("creates an Manager object", () => {
  const manager = new Manager("New-User1", 90, "New-User1@gmail", 4);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role of employee
test("gets role of employee", () => {
  const manager = new Manager("New-User2", 90, "New-User2@gmail.com");

  expect(manager.getRole()).toEqual("Manager");
});