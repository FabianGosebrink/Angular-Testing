import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { getInnerHtml } from '../../../helpers/DOM-helpers';
import { AsyncPipeComponent } from './async-pipe.component';

describe('AsyncPipeComponent', () => {
  let component: AsyncPipeComponent;
  let fixture: ComponentFixture<AsyncPipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncPipeComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncPipeComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(
    'should correctly visualize the emitted values from the stream',
    waitForAsync(() => {
      expect(getInnerHtml<AsyncPipeComponent>(fixture, 'span')).toBe('');
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(getInnerHtml<AsyncPipeComponent>(fixture, 'span')).toBe(
          'Fabian'
        );
      });
    })
  );
});
