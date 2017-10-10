import { exec } from 'child_process';
import { Todo } from '../models/todo.models';
import { Observable } from 'rxjs/Rx';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { TodoService } from '../core/todo.service';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { ShellComponent } from './shell.component';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;
  let service: TodoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, ReactiveFormsModule],
      declarations: [ShellComponent, TodoFormComponent, TodoListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    service = TestBed.get(TodoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get service injected', () => {
    expect(component.todoService).toBeTruthy();
  });

  it('ngOnInit shall call service to get all items', () => {
    spyOn(service, 'getAllTodos').and.returnValue(Observable.of([]));
    fixture.detectChanges();
    expect(service.getAllTodos).toHaveBeenCalled();
  });

  it('addTodo shall call service to get all items', () => {
    spyOn(service, 'getAllTodos').and.returnValue(Observable.of([]));
    component.addTodo('');
    expect(service.getAllTodos).toHaveBeenCalled();
  });

  it('addTodo shall call service to add an item', () => {
    spyOn(service, 'addTodo');
    component.addTodo('description');
    expect(service.addTodo).toHaveBeenCalled();
  });

  it('addTodo shall add an item to the service', fakeAsync(() => {
    let todos: Todo[];
    service.getAllTodos().subscribe((items: Todo[]) => todos = items);
    tick(200);
    expect(todos.length).toBe(0);

    component.addTodo('description');

    service.getAllTodos().subscribe((items: Todo[]) => todos = items);
    tick(200);
    expect(todos.length).toBe(1);
    expect(todos[0].description).toBe('description');
  }));

  it('markAsDone shall call service updateTodo', () => {
    spyOn(service, 'updateTodo');
    const todo = new Todo();
    todo.id = 'testId';
    component.markAsDone(todo);
    expect(service.updateTodo).toHaveBeenCalled();
  });

  it('markAsDone shall updateTodo and set \'done\' to \'done\'', fakeAsync(() => {
    // const todo = new Todo();
    const addedToDo = service.addTodo('todo');

    let notDoneTodo: Todo;
    service.getSingleTodo(addedToDo.id).subscribe((item: Todo) => {
      notDoneTodo = item;
    });
    tick(200);
    expect(notDoneTodo.done).toBe(false);

    component.markAsDone(addedToDo);

    let doneTodo: Todo;
    service.getSingleTodo(addedToDo.id).subscribe((item: Todo) => {
      doneTodo = item;
    });
    tick(200);
    expect(doneTodo.done).toBe(true);

  }));
});
