import {async, ComponentFixture, TestBed,} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {TodoFormComponent} from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [ReactiveFormsModule, TodoFormComponent]
}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
