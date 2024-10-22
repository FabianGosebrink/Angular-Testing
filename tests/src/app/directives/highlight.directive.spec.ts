import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DummyComponent } from './dummy.component';
import { HoverHighlightDirective } from './highlight.directive';
import { getDebugElement, getDirective } from '../helpers/DOM-helpers';

describe('HighlightDirective', () => {
  let component: DummyComponent;
  let fixture: ComponentFixture<DummyComponent>;
  let inputEl: DebugElement;
  let directive: HoverHighlightDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummyComponent, HoverHighlightDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    inputEl = getDebugElement(fixture, '#forTesting');
    directive = getDirective(fixture, HoverHighlightDirective);
  });

  test('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  test('hovering over span shall trigger colors', () => {
    // arrange
    inputEl.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('blue');

    // act
    inputEl.triggerEventHandler('mouseout', null);
    fixture.detectChanges();

    // assert
    expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
  });
});
