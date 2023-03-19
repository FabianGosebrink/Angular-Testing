import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export function getDebugElement<T>(
  fixture: ComponentFixture<T>,
  searchItem: string
) {
  return fixture.debugElement.query(By.css(searchItem));
}

export function getInnerHtml<T>(
  fixture: ComponentFixture<T>,
  searchItem: string
) {
  return fixture.debugElement.query(By.css(searchItem)).nativeElement.innerHTML;
}
