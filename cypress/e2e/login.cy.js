it("Should open the main page", () => {
  cy.visit("/");
  cy.contains("Books list");
});

it("Should successfully login", () => {
  cy.visit("/");

  cy.login("test@test.com", "test");
  //   cy.contains("Log in").click();
  //   cy.get("#mail").type("test@test.com");
  //   cy.get("#pass").type("test");
  //   cy.contains("Submit").click();

  cy.contains("Добро пожаловать test@test.com").should("be.visible");
});

it("Should not login with empty login input", () => {
  cy.visit("/");

  cy.login("", "test");
  //   cy.contains("Log in").click();
  //   cy.get("#mail").type(" ");
  //   cy.get("#pass").type("test");
  //   cy.contains("Submit").click();

  cy.get("#mail")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});

it("Should not login with empty password input", () => {
  cy.visit("/");

  cy.login("test@test.com");
  //   cy.contains("Log in").click();
  //   cy.get("#mail").type("test@test.com");
  //   cy.contains("Submit").click();

  cy.get("#pass")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});