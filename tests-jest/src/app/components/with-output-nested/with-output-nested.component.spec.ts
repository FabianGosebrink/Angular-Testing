import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WithOutputNestedComponent } from './with-output-nested.component';

describe('WithOutputNestedComponent', () => {
  let component: WithOutputNestedComponent;
  let fixture: ComponentFixture<WithOutputNestedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    declarations: [WithOutputNestedComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithOutputNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
