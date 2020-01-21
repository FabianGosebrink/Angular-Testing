import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export function queryDebugElement<T>(
  fixture: ComponentFixture<T>,
  searchItem: string
) {
  return fixture.debugElement.query(By.css(searchItem));
}

export function getNativeHtmlElement<T>(
  fixture: ComponentFixture<T>,
  searchItem: string
) {
  return queryDebugElement(fixture, searchItem).nativeElement;
}

export function getInnerHtml<T>(
  fixture: ComponentFixture<T>,
  searchItem: string
) {
  return getNativeHtmlElement(fixture, searchItem).innerHTML;
}
