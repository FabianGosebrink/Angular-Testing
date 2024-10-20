import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo.models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone: true,
  imports: [NgFor, NgIf],
})
export class TodoListComponent {
  @Input() items: Todo[] = [];
  @Output() markedAsDone = new EventEmitter();

  markAsDone(item: Todo) {
    this.markedAsDone.emit(item);
  }
}
