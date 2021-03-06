import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WithOutputNestedComponent } from '../with-output-nested/with-output-nested.component';
import { WithOutputComponent } from './with-output.component';

describe('WithOutputComponent', () => {
  let component: WithOutputComponent;
  let nestedComponent: WithOutputNestedComponent;
  let fixture: ComponentFixture<WithOutputComponent>;
  let nestedFixture: ComponentFixture<WithOutputNestedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithOutputComponent, WithOutputNestedComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithOutputComponent);
    component = fixture.componentInstance;
    nestedFixture = TestBed.createComponent(WithOutputNestedComponent);
    nestedComponent = nestedFixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(nestedComponent).toBeTruthy();
  });

  it('should test the emitter with a Jasmine spy', () => {
    spyOn(component.greet, 'emit');

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(component.greet.emit).toHaveBeenCalledWith('Hi');
  });

  it(
    'should test the emitter with a simple subscribe',
    waitForAsync(() => {
      component.greet.subscribe((d) => {
        expect(d).toBe('Hi');
      });

      component.doGreet();
    })
  );

  it('should emit the nested Eventemitter when clicking the nested button', () => {
    spyOn(nestedComponent.greetFromNested, 'emit');

    const button = nestedFixture.nativeElement.querySelector('button');
    button.click();

    expect(nestedComponent.greetFromNested.emit).toHaveBeenCalledWith(
      'Hi from nested'
    );
  });

  it('should call the parent component method when eventEmitter fires', () => {
    spyOn(component, 'greetFromNested');
    const nestedComp = fixture.debugElement.query(
      By.directive(WithOutputNestedComponent)
    ).componentInstance;
    nestedComp.greetFromNested.emit('Hi from nested');
    expect(component.greetFromNested).toHaveBeenCalledWith('Hi from nested');
  });

  it('should call the parent component method when the nested button is clicked', () => {
    spyOn(component, 'greetFromNested');
    const nestedComp = fixture.debugElement.query(
      By.directive(WithOutputNestedComponent)
    );

    const nestedButton = nestedComp.query(By.css('button'));
    // nestedButton.nativeElement.click();
    nestedButton.triggerEventHandler('click', {});
    expect(component.greetFromNested).toHaveBeenCalledWith('Hi from nested');
  });
});
