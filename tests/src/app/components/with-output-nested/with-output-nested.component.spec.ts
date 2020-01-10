import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithOutputNestedComponent } from './with-output-nested.component';

describe('WithOutputNestedComponent', () => {
  let component: WithOutputNestedComponent;
  let fixture: ComponentFixture<WithOutputNestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithOutputNestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithOutputNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
