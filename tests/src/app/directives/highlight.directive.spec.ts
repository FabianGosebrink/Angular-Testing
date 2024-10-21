import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DummyComponent } from './dummy.component';
import { HoverHighlightDirective } from './highlight.directive';
import { getDebugElement } from '../helpers/DOM-helpers';

describe('HighlightDirective', () => {
  let component: DummyComponent;
  let fixture: ComponentFixture<DummyComponent>;
  let inputEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummyComponent, HoverHighlightDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    inputEl = getDebugElement(fixture, '#forTesting');
  });

  test('should create an instance', () => {
    const directive = new HoverHighlightDirective();
    expect(directive).toBeTruthy();
  });

  test('hovering over span shall trigger colors', () => {
    inputEl.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('blue');

    inputEl.triggerEventHandler('mouseout', null);
    fixture.detectChanges();

    expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
  });
});
