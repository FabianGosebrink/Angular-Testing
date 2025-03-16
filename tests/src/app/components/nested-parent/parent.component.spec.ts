import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { getNativeElement } from '../../helpers/DOM-helpers';
import { By } from '@angular/platform-browser';
import { ChildComponent } from '../nested-child/child.component';
import { MockComponent } from 'ng-mocks';

// @Component({
//   selector: 'app-child',
//   standalone: true,
//   template: ''
// })
// class MockChildComponent {}

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentComponent],
    })
      .overrideComponent(ParentComponent, {
        // remove: { imports: [ChildComponent] },
        // add: { imports: [MockComponent(ChildComponent)] }
        set: { imports: [MockComponent(ChildComponent)] },
      })
      .compileComponents();

    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleChildVisibility', () => {
    it('should toggle child visible and display child component', () => {
      // arrange
      const button = getNativeElement(fixture, 'button');

      // act
      button.click();
      fixture.detectChanges();

      // assert
      expect(
        fixture.debugElement.query(By.directive(ChildComponent)),
      ).toBeDefined();
    });
  });
});
