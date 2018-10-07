import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DummyComponent } from './dummy.component';
import { HoverHighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  let component: DummyComponent;
  let fixture: ComponentFixture<DummyComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DummyComponent, HoverHighlightDirective],
    });
    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('#forTesting'));
  });

  it('should create an instance', () => {
    const directive = new HoverHighlightDirective();
    expect(directive).toBeTruthy();
  });

  it('hovering over span shall trigger colors', () => {
    inputEl.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('blue');

    inputEl.triggerEventHandler('mouseout', null);
    fixture.detectChanges();

    expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
  });
});
