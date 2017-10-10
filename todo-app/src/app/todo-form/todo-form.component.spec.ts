import { By } from '@angular/platform-browser';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TodoFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('addTodo method shall emit the output', () => {

    component.onAddTodo.subscribe((desc: string) => {
      expect(desc).toBe('hello');
    });

    fixture.detectChanges();
    component.form.setValue({ todoDescription: 'hello' });
    component.addTodo();
  });

  it('eventemitter shall be called when button is clicked', () => {
    spyOn(component.onAddTodo, 'emit');

    fixture.detectChanges();
    component.form.setValue({ todoDescription: 'emitted' });

    const button = fixture.nativeElement.querySelector('button');
    fixture.detectChanges();
    button.click();

    expect(component.onAddTodo.emit).toHaveBeenCalledWith('emitted');
  });

  it('button should be disabled when description is empty', async(() => {
    fixture.detectChanges();
    component.form.setValue({ todoDescription: '' });

    expect(component.form.valid).toBe(false);

    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    expect(button.disabled).toBe(true);
  }));

  it('addTodo() resets the description', () => {
    fixture.detectChanges();
    component.form.setValue({ todoDescription: 'test' });

    component.addTodo();

    expect(component.form.value.todoDescription).toBeNull();
  });

  it('component description property gets reflected on UI', fakeAsync(() => {
    fixture.detectChanges();
    component.form.setValue({ todoDescription: 'test' });
    tick();
    const input = fixture.nativeElement.querySelector('input');
    expect(input.value).toBe('test');
  }));
});
