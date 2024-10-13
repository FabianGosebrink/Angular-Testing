import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class TodoFormComponent {
  @Output() todoAdded = new EventEmitter();

  form = new FormGroup({
    todoDescription: new FormControl('', Validators.required),
  });

  addTodo() {
    const payload = {...this.form.value}
    // console.log(payload.todoDescription);
    this.todoAdded.emit(payload.todoDescription);
    this.form.reset();
  }
}
