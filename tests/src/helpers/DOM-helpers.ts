import { By } from '@angular/platform-browser';
import { ComponentFixture } from '@angular/core/testing';

export function queryDebugElement<T>(fixture: ComponentFixture<T>, searchItem: string) {
    return fixture.debugElement.query(By.css(searchItem));
}

export function getInnerHtml<T>(fixture: ComponentFixture<T>, searchItem: string) {
    return fixture.debugElement.query(By.css(searchItem)).nativeElement.innerHTML;
}
