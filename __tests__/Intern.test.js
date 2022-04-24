const Intern = require("../lib/Intern");

// creates an Intern object
test("creates an Intern object", () => {
  const intern = new Intern("New-User1", 90, "New-User1@gmail", "Student1");

  expect(intern.school).toEqual(expect.any(String));
});

// gets employee school
test("gets employee school", () => {
  const intern = new Intern("New-User1", 90, "New-User1@gmail", "Student2");

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

// gets role of employee
test("gets role of employee", () => {
  const intern = new Intern("New-User1", 90, "New-User1@gmail.com", "Student3");

  expect(intern.getRole()).toEqual("Intern");
});