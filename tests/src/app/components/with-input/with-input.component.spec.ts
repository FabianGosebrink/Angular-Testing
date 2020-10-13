import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WithInputComponent } from './with-input.component';

describe('WithInputComponent', () => {
  let component: WithInputComponent;
  let fixture: ComponentFixture<WithInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithInputComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithInputComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(
    'should correctly render the passed @Input value',
    waitForAsync(() => {
      expect(
        fixture.debugElement.query(By.css('p')).nativeElement.innerHTML
      ).toBe('');

      component.name = 'Fabian';

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(
          fixture.debugElement.query(By.css('p')).nativeElement.innerHTML
        ).toBe('Fabian');
      });
    })
  );
});
