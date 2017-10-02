import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
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

    component.description = 'hello';
    component.addTodo();
  });

  it('eventemitter shall be called when button is clicked', () => {
    spyOn(component.onAddTodo, 'emit');
    component.description = 'emitted';
    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(component.onAddTodo.emit).toHaveBeenCalledWith('emitted');
  });

  it('button should be disabled when description is empty', () => {
    component.description = '';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);

    component.description = 'test';
    fixture.detectChanges();

    expect(button.disabled).toBe(false);
  });

  it('addTodo() shall reset the description', () => {
    component.description = 'test';
    component.addTodo();
    expect(component.description).toBe('');
  });

  it('input attribute \'name\' shall be \'description\'', () => {
    const input = fixture.nativeElement.querySelector('input');
    expect(input.name).toBe('description');
  });

  it('component description proeprty gets reflected on UI', fakeAsync(() => {
    component.description = 'test';
    fixture.detectChanges();
    tick();
    const input = fixture.nativeElement.querySelector('input');
    expect(input.value).toBe('test');
  }));
});
