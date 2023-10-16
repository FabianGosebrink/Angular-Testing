import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { getInnerHtml } from '../../helpers/DOM-helpers';
import { WithInputComponent } from './with-input.component';

describe('WithInputComponent', () => {
  let component: WithInputComponent;
  let fixture: ComponentFixture<WithInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WithInputComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithInputComponent);
    component = fixture.componentInstance;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should correctly render the passed @Input value', waitForAsync(() => {
    expect(getInnerHtml<WithInputComponent>(fixture, 'p')).toBe('');

    component.name = 'Fabian';

    fixture.detectChanges();

    expect(getInnerHtml<WithInputComponent>(fixture, 'p')).toBe('Fabian');
  }));
});
