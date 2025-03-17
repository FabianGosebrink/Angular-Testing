import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import {
  getDebugElement,
  getNativeElement,
} from '../../../helpers/DOM-helpers';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggle hint', () => {
    it('should show hint when button was clicked', () => {
      // arrange
      const button = getNativeElement(fixture, 'button');
      const hintBefore = getDebugElement(fixture, 'p');

      // act
      button.click();
      fixture.detectChanges();

      // assert
      expect(hintBefore).toBeFalsy();
      expect(getNativeElement(fixture, 'p')).toBeDefined();
    });
  });
});
