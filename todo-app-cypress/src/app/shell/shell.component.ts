import { Component, OnInit, inject } from '@angular/core';
import { TodoService } from '../core/todo.service';
import { Todo } from '../models/todo';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent],
})
export class ShellComponent implements OnInit {
  private readonly todoService = inject(TodoService);

  items: Todo[] = [];

  ngOnInit() {
    this.todoService
      .getAllTodos()
      .subscribe((items: Todo[]) => (this.items = items));
  }

  addTodo(description: string) {
    this.todoService.addTodo(description);
    this.todoService
      .getAllTodos()
      .subscribe((items: Todo[]) => (this.items = items));
  }

  markAsDone(todo: Todo) {
    todo.done = true;
    this.todoService.updateTodo(todo);
  }
}
