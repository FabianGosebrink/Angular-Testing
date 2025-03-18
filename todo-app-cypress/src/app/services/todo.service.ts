import {Injectable} from '@angular/core';
import {delay, Observable, of} from 'rxjs';
import {Todo} from '../models/todo.models';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private existingTodos: Todo[] = [
    { done: false, description: 'Todo From Service', id: '1', created: new Date() },
  ];

  getAllTodos(): Observable<Todo[]> {
    return of(this.existingTodos).pipe(delay(200));
  }

  getSingleTodo(id: string): Observable<Todo | undefined> {
    const todo = this.existingTodos.find((x) => x.id === id);

    return of(todo).pipe(delay(200));
  }

  addTodo(description: string): Todo {
    const toAdd: Todo = {
      created: new Date(),
      id: this.guid(),
      done: false,
      description
    }
    this.existingTodos.push(toAdd);
    return toAdd;
  }

  updateTodo(toUpdate: Todo): Todo {
    this.existingTodos.map((obj) =>
      this.existingTodos.find((o) => o.id === obj.id)
    );
    return toUpdate;
  }

  deleteTodo(id: string) {
    this.existingTodos = this.existingTodos.filter((item) => item.id !== id);
  }

  private guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return (
      s4() +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      s4() +
      s4()
    );
  }
}
