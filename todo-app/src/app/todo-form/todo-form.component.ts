import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  description: string;
  @Output() onAddTodo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    this.onAddTodo.emit(this.description);
    this.description = '';
  }
}
