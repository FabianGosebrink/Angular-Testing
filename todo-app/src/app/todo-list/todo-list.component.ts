import { Todo } from '../models/todo.models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() items: Todo[] = [];
  @Output() onMarkAsDone = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  markAsDone(item: Todo) {
    this.onMarkAsDone.emit(item);
  }
}
