import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Todo } from '../models/todo.models';
import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method \'markAsDone\' calls eventEmitter', () => {
    spyOn(component.onMarkAsDone, 'emit');
    const item = new Todo();
    component.markAsDone(item);

    expect(component.onMarkAsDone.emit).toHaveBeenCalledWith(item);
  });

  it('should correctly render the passed @Input value', () => {
    const allListItems = fixture.debugElement.queryAll(By.css('li'));

    expect(allListItems.length).toBe(0);
    component.items = [new Todo(), new Todo()];

    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(2);
  });

  it('should correctly display the description', () => {
    const todo = new Todo();
    todo.description = 'toShow';
    component.items = [todo];
    fixture.detectChanges();
    const allItems = fixture.debugElement.queryAll(By.css('li'));

    const renderedText = allItems[0].nativeElement.querySelector('span').innerHTML;
    expect(renderedText).toBe(todo.description);
  });

  it('eventemitter shall be called when button is clicked', () => {
    const todo = new Todo();
    todo.description = 'toShow';
    component.items = [todo];
    fixture.detectChanges();

    spyOn(component.onMarkAsDone, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(component.onMarkAsDone.emit).toHaveBeenCalledWith(todo);
  });

  it('span is invisble when item is done', () => {
    const todo = new Todo();
    todo.description = 'toShow';
    todo.done = true;
    component.items = [todo];
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('span')).toBeNull();
    expect(fixture.nativeElement.querySelector('s')).toBeDefined();
  });

  it('css class \'inactive\' is applied when item is done', () => {
    const todo = new Todo();
    todo.description = 'toShow';
    todo.done = true;
    component.items = [todo];
    fixture.detectChanges();
    const classList = fixture.nativeElement.querySelector('s').classList;
    expect(classList).toContain('inactive');

  });

  it('s is invisible when item is not done', () => {
    const todo = new Todo();
    todo.description = 'toShow';
    component.items = [todo];
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('span')).toBeDefined();
    expect(fixture.nativeElement.querySelector('s')).toBeNull();

  });
});
