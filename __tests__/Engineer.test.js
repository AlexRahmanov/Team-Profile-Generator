const Engineer = require("../lib/Engineer");

// creates an Engineer object
test("creates an Engineer object", () => {
  const engineer = new Engineer(
    "New-User1",
    90,
    "New-User1@gmail",
    "New-User1-New-User"
  );

  expect(engineer.github).toEqual(expect.any(String));
});

// gets engineer github value
test("gets engineer github value", () => {
  const engineer = new Engineer(
    "New-User2",
    90,
    "New-User2@gmail",
    "New-User2-New-User"
  );

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

// gets role of employee
test("gets role of employee", () => {
  const engineer = new Engineer(
    "New-User3",
    90,
    "New-User3@gmail",
    "New-User3-New-User"
  );

  expect(engineer.getRole()).toEqual("Engineer");
});