import { Component, OnInit, inject } from '@angular/core';
import { TodoFormComponent } from '../../presentational/todo-form/todo-form.component';
import { TodoListComponent } from '../../presentational/todo-list/todo-list.component';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.models';

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
