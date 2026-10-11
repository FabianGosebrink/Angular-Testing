import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoverHighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `<span id="forTesting" appHoverhighlight>anyValue</span>`,
  imports: [HoverHighlightDirective],
})
export class DummyComponent {}

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
});
