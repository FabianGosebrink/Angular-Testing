import { getInnerHtml, queryDebugElement } from '../../../helpers/DOM-helpers';
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
    expect(getInnerHtml<AsyncPipeComponent>(fixture, 'span')).toBe('');
    component.name$ = Observable.of('Fabian');
    fixture.detectChanges();
    expect(getInnerHtml<AsyncPipeComponent>(fixture, 'span')).toBe('Fabian');
  });
});
