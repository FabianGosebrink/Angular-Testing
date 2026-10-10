import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DummyComponent } from './dummy.component';
import { HoverHighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DummyComponent>;
  let highlightedEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummyComponent, HoverHighlightDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(DummyComponent);
    highlightedEl = fixture.debugElement.query(By.directive(HoverHighlightDirective));
  });

  test('should create an instance', () => {
    expect(highlightedEl).toBeTruthy();
  });

  test('should set background color to blue on hover', async () => {
    // act
    highlightedEl.triggerEventHandler('mouseover');
    await fixture.whenStable();

    // assert
    expect(highlightedEl.nativeElement.style.backgroundColor).toBe('blue');
  });

  test('should reset background color when mouse leaves', async () => {
    // arrange
    highlightedEl.triggerEventHandler('mouseover');
    await fixture.whenStable();

    // act
    highlightedEl.triggerEventHandler('mouseout');
    await fixture.whenStable();

    // assert
    expect(highlightedEl.nativeElement.style.backgroundColor).toBe('inherit');
  });
});
