import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Type } from '@angular/core';

export function getDebugElement<T>(
  fixture: ComponentFixture<T>,
  searchItem: string,
) {
  return fixture.debugElement.query(By.css(searchItem));
}

export function getDirective<T, K>(
  fixture: ComponentFixture<T>,
  directiveType: Type<K>,
) {
  return fixture.debugElement.query(By.directive(directiveType)) as K;
}

export function getNativeElement<T>(
  fixture: ComponentFixture<T>,
  searchItem: string,
) {
  return getDebugElement(fixture, searchItem).nativeElement;
}

export function getInnerHtml<T>(
  fixture: ComponentFixture<T>,
  searchItem: string,
) {
  return getNativeElement(fixture, searchItem).innerHTML;
}
