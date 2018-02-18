import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithOutputComponent } from './with-output.component';

describe('WithOutputComponent', () => {
  let component: WithOutputComponent;
  let fixture: ComponentFixture<WithOutputComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WithOutputComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WithOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the emitter with a Jasmine spy', () => {
    spyOn(component.greet, 'emit');

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(component.greet.emit).toHaveBeenCalledWith('Hi');
  });

  it('should test the emitter with a simple subscribe', () => {
    component.greet.subscribe(d => {
      expect(d).toBe('Hi');
    });

    component.doGreet();
  });

  it('should fire the event emitter when triggering an event', () => {
    component.greet.subscribe(d => {
      expect(d).toBe('Hi');
    });

    fixture.debugElement.triggerEventHandler('greet', <Event>{});
  });
});
