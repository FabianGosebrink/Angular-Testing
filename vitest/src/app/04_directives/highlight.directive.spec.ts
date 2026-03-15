import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DummyComponent } from './dummy.component';
import { HoverHighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';

describe('HighlightDirective', () => {
  let component: DummyComponent;
  let fixture: ComponentFixture<DummyComponent>;
  let highlightedEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummyComponent, HoverHighlightDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    highlightedEl = fixture.debugElement.query(
      By.directive(HoverHighlightDirective),
    );
  });

  test('should create an instance', () => {
    expect(highlightedEl).toBeTruthy();
  });

  test('hovering over span shall trigger colors', async () => {
    // arrange
    highlightedEl.triggerEventHandler('mouseover');
    fixture.detectChanges();
    await fixture.whenStable();

    const backgroundColorBefore =
      highlightedEl.nativeElement.style.backgroundColor;

    // act
    highlightedEl.triggerEventHandler('mouseout');
    fixture.detectChanges();
    await fixture.whenStable();

    // assert
    expect(backgroundColorBefore).toBe('blue');
    expect(highlightedEl.nativeElement.style.backgroundColor).toBe('inherit');
  });
});
