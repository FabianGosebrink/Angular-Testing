import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { getInnerHtml } from '../../helpers/DOM-helpers';
import { AsyncPipeComponent } from './async-pipe.component';

describe('AsyncPipeComponent', () => {
  let component: AsyncPipeComponent;
  let fixture: ComponentFixture<AsyncPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncPipeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncPipeComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should correctly visualize the emitted values from the stream', fakeAsync(() => {
    // arrange
    const spanBefore = getInnerHtml(fixture, 'span');

    // act
    fixture.detectChanges();
    tick(200);
    fixture.detectChanges();

    // assert
    expect(spanBefore).toBe('');
    expect(getInnerHtml<AsyncPipeComponent>(fixture, 'span')).toBe('Fabian');
  }));
});
