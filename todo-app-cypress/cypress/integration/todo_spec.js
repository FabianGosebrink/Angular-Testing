describe('My First Test', () => {
  beforeEach(function() {
    cy.visit('http://localhost:4200');
    cy.get('#addtodobutton').as('addtodobutton');
    cy.get('#todoinput').as('todoinput');
    cy.get('#todolist').as('todolist');
    cy.get('#addtodoform').as('addtodoform');
  });

  it('Application has the correct title!', () => {
    cy.title().should('include', 'TodoApp');
  });

  it('Application has the correct h1 tag!', () => {
    cy.get('h1').contains('Welcome to app!');
  });

  it('Button has correct naming', () => {
    cy.get('@addtodobutton').should('contain', 'Add Todo');
  });

  it('Add Todo button is disabled when input is empty', () => {
    cy.get('@addtodobutton').should('have.attr', 'disabled');
  });

  it('Add Todo button is enabled when input is not empty', () => {
    cy.get('@addtodobutton')
      .should('have.attr', 'disabled')
      .get('@todoinput')
      .type('SomeTodo')
      .get('@addtodobutton')
      .should('not.have.attr', 'disabled');
  });

  it('Submit Form should clear Input', () => {
    cy.get('@todoinput')
      .type('SomeTodo')
      .get('@addtodoform')
      .submit()
      .get('@todoinput')
      .should('have.value', '');
  });

  it('After submitting form list should contain element', () => {
    cy.get('@todoinput')
      .type('SomeTodo')
      .get('@addtodoform')
      .submit()
      .get('#todolist>li')
      .its('length')
      .should('be.eq', 1);
  });

  it("After clicking 'done' the item should contain done css class", () => {
    cy.get('@todoinput')
      .type('SomeTodo')
      .get('@addtodoform')
      .submit()
      .get('#doneButton')
      .click()
      .get('#todolist>li s')
      .first()
      .should('have.class', 'inactive');
  });
});
