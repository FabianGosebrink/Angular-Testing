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
    await fixture.whenStable();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggle hint', () => {
    test('should show hint when button was clicked', async () => {
      // arrange
      const button = fixture.debugElement.query(By.css('button')).nativeElement;
      const hintBefore = fixture.debugElement.query(By.css('p'));

      // act
      button.click();
      await fixture.whenStable();

      // assert
      const hintAfter = fixture.debugElement.query(By.css('p'));

      expect(hintBefore).toBeFalsy();
      expect(hintAfter.nativeElement.textContent).toContain('This is a hint');
    });

    test('should hide hint when button was clicked twice', async () => {
      // arrange
      const button = fixture.debugElement.query(By.css('button')).nativeElement;
      button.click();
      await fixture.whenStable();

      const hintBefore = fixture.debugElement.query(By.css('p'));

      // act
      button.click();
      await fixture.whenStable();

      // assert
      expect(hintBefore).toBeTruthy();
      expect(fixture.debugElement.query(By.css('p'))).toBeNull();
    });
  });
});
