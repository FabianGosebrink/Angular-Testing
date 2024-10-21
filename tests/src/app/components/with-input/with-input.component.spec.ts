import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { getInnerHtml } from '../../helpers/DOM-helpers';
import { WithInputComponent } from './with-input.component';

describe('WithInputComponent', () => {
  let component: WithInputComponent;
  let fixture: ComponentFixture<WithInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithInputComponent],
    }).compileComponents();
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

  test('should correctly render the passed signal input value', waitForAsync(() => {
    expect(getInnerHtml<WithInputComponent>(fixture, 'p')).toBe('');

    fixture.componentRef.setInput('signalName', 'Fabian2');

    fixture.detectChanges();

    expect(getInnerHtml<WithInputComponent>(fixture, 'span')).toBe('Fabian2');
  }));
});
