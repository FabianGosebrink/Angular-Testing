import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

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
    it('should make child visible', () => {
      // arrange
      const button = fixture.debugElement.query(By.css('button')).nativeElement;
      const childComponentBefore = fixture.debugElement.query(By.css('app-child'));

      // act
      button.click();
      fixture.detectChanges();

      // assert
      expect(fixture.debugElement.query(By.css('app-child'))).toBeTruthy();
      expect(childComponentBefore).toBeFalsy();
    });
  });
});
