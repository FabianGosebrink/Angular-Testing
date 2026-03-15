import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
