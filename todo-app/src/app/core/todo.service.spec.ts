import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { Todo } from '../models/todo.models';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });

    service = TestBed.get(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get todoitems correctly', fakeAsync(() => {
    let items;
    service.getAllTodos().subscribe((result: Todo[]) => {
      items = result;
    });

    expect(items).not.toBeDefined();
    tick(200);
    expect(items).toBeDefined();

  }));

  it('should add todoitems correctly', fakeAsync(() => {
    let items: Todo[];
    service.getAllTodos().subscribe((result: Todo[]) => {
      items = result;
    });
    tick(200);
    expect(items.length).toBe(0);

    service.addTodo(new Todo());

    service.getAllTodos().subscribe((result: Todo[]) => {
      items = result;
    });
    tick(200);
    expect(items.length).toBe(1);
  }));

  it('should update todoitems correctly', fakeAsync(() => {
    const todo = new Todo();
    todo.description = 'description';

    service.addTodo(todo);

    todo.description = 'Fabian';

    const singleTodo = service.updateTodo(todo);

    expect(singleTodo.description).toBe('Fabian');
    let items: Todo[];
    service.getAllTodos().subscribe((result: Todo[]) => {
      items = result;
    });
    tick(200);
    expect(items[0].description).toBe('Fabian');
  }));

  it('should delete todoitems correctly', fakeAsync(() => {
    const todo = new Todo();
    todo.id = 'Guid';
    todo.description = 'description';

    service.addTodo(todo);

    let items: Todo[];
    service.getAllTodos().subscribe((result: Todo[]) => {
      items = result;
    });
    tick(200);
    expect(items.length).toBe(1);

    service.deleteTodo(todo.id);

    service.getAllTodos().subscribe((result: Todo[]) => {
      items = result;
    });
    tick(200);
    expect(items.length).toBe(0);
  }));
});
