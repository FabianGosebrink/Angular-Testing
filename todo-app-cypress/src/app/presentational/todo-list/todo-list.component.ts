import {Component, input, output} from '@angular/core';
import {Todo} from '../../models/todo.models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [],
})
export class TodoListComponent {
  // @Input() items: Todo[] = [];
  // @Output() markedAsDone = new EventEmitter();

  items = input<Todo[]>([]);
  markedAsDone = output<Todo>();


  markAsDone(item: Todo) {
    this.markedAsDone.emit(item);
  }
}
