import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { By } from '@angular/platform-browser';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggle hint', () => {
    test('should show hint when button was clicked', () => {
      // arrange
      const button = fixture.debugElement.query(By.css('button')).nativeElement;
      const hintBefore = fixture.debugElement.query(By.css('p'));

      // act
      button.click();
      fixture.detectChanges();

      // assert
      expect(hintBefore).toBeFalsy();
      expect(
        fixture.debugElement.query(By.css('p')).nativeElement,
      ).toBeDefined();
    });
  });
});
