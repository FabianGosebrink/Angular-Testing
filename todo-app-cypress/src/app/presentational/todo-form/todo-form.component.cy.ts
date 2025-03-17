import {TodoFormComponent} from './todo-form.component';
import {createOutputSpy} from 'cypress/angular';

it('mounts', () => {
  cy.mount(TodoFormComponent);
});

it('should emit output when add is clicked', () => {
  cy.mount(TodoFormComponent, {
    componentProperties: {
      todoAdded: createOutputSpy('todoAddedSpy')
    }
  });

  cy.getBySel('todoinput').type('My First Todo');

  cy.getBySel('addtodobutton').click();

  cy.get('@todoAddedSpy').should('have.been.called');
})
