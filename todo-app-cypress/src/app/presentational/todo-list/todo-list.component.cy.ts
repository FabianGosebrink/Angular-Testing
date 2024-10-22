import { TodoListComponent } from './todo-list.component';
import { Todo } from '../../models/todo.models';
import { createOutputSpy } from 'cypress/angular';

it('mounts', () => {
  cy.mount(TodoListComponent, {
    componentProperties: {
      items: [{ id: "some-id", description: "some value" }] as Todo[]
    },
  })
})

it('clicking + fires a change event with the clicked value', () => {
  cy.mount(TodoListComponent, {
    componentProperties: {
      items: [{ id: "some-id", description: "some value" }] as Todo[],
      markedAsDone: createOutputSpy('markedAsDone'),
    },
  })
  cy.get('#doneButton').click()
  cy.get('@markedAsDone').should('have.been.calledWith', { id: "some-id", description: "some value" })
})
