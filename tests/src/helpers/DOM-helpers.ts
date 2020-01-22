import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export function getDebugElement<T>(
  fixture: ComponentFixture<T>,
  searchItem: string
) {
  return fixture.debugElement.query(By.css(searchItem));
}

export function getNativeHtmlElement<T>(
  fixture: ComponentFixture<T>,
  searchItem: string
): HTMLElement {
  const debugElement = getDebugElement(fixture, searchItem);
  return debugElement ? debugElement.nativeElement : null;
}

export function getInnerHtml<T>(
  fixture: ComponentFixture<T>,
  searchItem: string
) {
  const nativeElement = getNativeHtmlElement(fixture, searchItem);
  return nativeElement ? nativeElement.innerHTML : null;
}
