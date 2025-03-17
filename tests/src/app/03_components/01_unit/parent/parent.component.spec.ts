import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentComponent],
    })
      .overrideComponent(ParentComponent, {
        set: { imports: [], schemas: [CUSTOM_ELEMENTS_SCHEMA] },
      })
      .compileComponents();

    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onClick', () => {
    it('should emit buttonClicked output', () => {
      // arrange
      const emitSpy = jest.spyOn(component.buttonClicked, 'emit');

      // act
      component.onClick();

      // assert
      expect(emitSpy).toHaveBeenCalled();
    });
  });
});
