import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithInputComponent } from './with-input.component';

describe('WithInputComponent', () => {
  let component: WithInputComponent;
  let fixture: ComponentFixture<WithInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WithInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithInputComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value', async(() => {

    expect(fixture.debugElement.query(By.css('p')).nativeElement.innerHTML).toBe('');

    component.name = 'Fabian';

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.query(By.css('p')).nativeElement.innerHTML).toBe('Fabian');
    });
  }));
});
