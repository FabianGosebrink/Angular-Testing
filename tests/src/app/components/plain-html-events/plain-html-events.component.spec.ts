import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as helpers from 'src/helpers/DOM-helpers';
import { PlainHtmlEventsComponent } from './plain-html-events.component';

describe('PlainHtmlEventsComponent', () => {
  let component: PlainHtmlEventsComponent;
  let fixture: ComponentFixture<PlainHtmlEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlainHtmlEventsComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainHtmlEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Button is available', () => {
    const button = helpers.getNativeHtmlElement(fixture, 'button');
    expect(button).toBeTruthy();
  });

  it('click on button click element', () => {
    const button = helpers.getNativeHtmlElement(fixture, 'button');
    const spy = spyOn(button, 'click');
    button.click();
    expect(spy).toHaveBeenCalled();
  });

  it('button click changes InnerHtml of span in specific text', () => {
    const spansInnerHtmlBeforeClick = helpers.getInnerHtml(fixture, 'span');
    expect(spansInnerHtmlBeforeClick).toBe('');
    const button = helpers.getNativeHtmlElement(fixture, 'button');
    button.click();
    const spansInnerHtmlAfterClick = helpers.getInnerHtml(fixture, 'span');
    expect(spansInnerHtmlAfterClick).not.toBe('');
  });

  it('input element is available', () => {
    const input = helpers.getNativeHtmlElement(fixture, 'input');
    expect(input).toBeTruthy();
  });

  it('input gets focus on focus event', () => {
    const input = helpers.getNativeHtmlElement(fixture, 'input');
    const focusedElement = helpers.getNativeHtmlElement(fixture, ':focus');
    expect(focusedElement).toBeFalsy();
    input.focus();
    expect(document.activeElement).toBe(input);
  });

  it('blur events lets loose the focus', () => {
    const input = helpers.getNativeHtmlElement(fixture, 'input');
    input.focus();
    expect(document.activeElement).toBe(input);
    input.blur();
    expect(document.activeElement).not.toBe(input);
  });

  it('blur events calls blur method', () => {
    spyOn(component, 'blurFunction');
    const input = helpers.getDebugElement(fixture, 'input');
    input.triggerEventHandler('focus', null);
    input.triggerEventHandler('blur', null);
    expect(component.blurFunction).toHaveBeenCalled();
  });
});
