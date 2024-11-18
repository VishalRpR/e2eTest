describe("Testing app", () => {
  beforeEach(() => {
    cy.visit("https://x-com-client.vercel.app/");
  });

  it("is able to log in", () => {
    cy.contains("Sign in").should("exist");
    cy.contains("Sign in").click();
    // cy.contains('Signin to your Account').should('exist', { timeout: 10000 })
    cy.get('input[placeholder="Email"]')
      .first()
      .should("be.visible")
      .type("ram@gmail.com", { force: true });
    cy.get('input[placeholder="Password"]')
      .first()
      .should("be.visible")
      .type("123", { force: true });
    cy.contains("Next").click();

    // cy.contains('View Content').should("exist", {timeout: 10000})
  });
});
