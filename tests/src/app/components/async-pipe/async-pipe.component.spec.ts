import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipeComponent } from './async-pipe.component';

describe('AsyncPipeComponent', () => {
  let component: AsyncPipeComponent;
  let fixture: ComponentFixture<AsyncPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncPipeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncPipeComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly visualize the emitted values from the stream', () => {
    expect(fixture.debugElement.query(By.css('span')).nativeElement.innerHTML).toBe('');
    component.name$ = Observable.of('Fabian');
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('span')).nativeElement.innerHTML).toBe('Fabian');
  });
});
