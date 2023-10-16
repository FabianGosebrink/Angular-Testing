import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodoService {
  private existingTodos: Todo[] = [];

  getAllTodos(): Observable<Todo[]> {
    return Observable.create((observer: Observer<Todo[]>) => {
      setTimeout(() => {
        observer.next(this.existingTodos);
        observer.complete();
      }, 200);
    });
  }

  getSingleTodo(id: string): Observable<Todo> {
    return Observable.create((observer: Observer<Todo>) => {
      setTimeout(() => {
        observer.next(this.existingTodos.find((x) => x.id === id));
        observer.complete();
      }, 200);
    });
  }

  addTodo(description: string): Todo {
    const toAdd: Todo = new Todo();
    toAdd.created = new Date();
    toAdd.id = this.guid();
    toAdd.done = false;
    toAdd.description = description;
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
