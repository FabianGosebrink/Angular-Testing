import {TestBed} from '@angular/core/testing';
import {ShellComponent} from './shell.component';
import {MockProvider} from 'ng-mocks';
import {TodoService} from '../../services/todo.service';
import {of} from 'rxjs';

describe('ShellComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellComponent],
      providers: [MockProvider(TodoService, {
        getAllTodos: () => of([{ done: false, description: 'Todo From Cypress', id: '1', created: new Date() }])
      })]
    }).compileComponents();
  });

  it('mounts', () => {
    cy.mount(ShellComponent)
  });
})
