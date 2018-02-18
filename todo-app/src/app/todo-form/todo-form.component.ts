import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() onAddTodo = new EventEmitter();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = new FormGroup({
      todoDescription: new FormControl('', Validators.required)
    });
  }

  addTodo() {
    const payload = Object.assign({}, this.form.value);
    // console.log(payload.todoDescription);
    this.onAddTodo.emit(payload.todoDescription);
    this.form.reset();
  }
}
