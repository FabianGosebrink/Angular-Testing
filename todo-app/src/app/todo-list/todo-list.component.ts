import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input()
  items: Todo[] = [];
  @Output()
  markedAsDone = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  markAsDone(item: Todo) {
    this.markedAsDone.emit(item);
  }
}
