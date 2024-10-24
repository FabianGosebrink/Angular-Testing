import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WithOutputComponent } from './with-output.component';
import { getNativeElement } from '../../helpers/DOM-helpers';

describe('WithOutputComponent', () => {
  let component: WithOutputComponent;
  let fixture: ComponentFixture<WithOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithOutputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should test the emitter with a spy', () => {
    // arrange
    const emitSpy = jest.spyOn(component.greet, 'emit');
    const button = getNativeElement(fixture, 'button');

    // act
    button.click();

    // assert
    expect(emitSpy).toHaveBeenCalledWith('Hi');
  });

  test('should test the emitter with a spy 2', () => {
    // arrange
    const spy = jest.spyOn(component.greet2, 'emit');
    const button = getNativeElement(fixture, 'button');

    // act
    button.click();

    // assert
    expect(spy).toHaveBeenCalledWith('Hi2');
  });
});
