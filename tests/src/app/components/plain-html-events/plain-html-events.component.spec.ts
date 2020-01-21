import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as helpers from 'src/helpers/DOM-helpers';
import { PlainHtmlEventsComponent } from './plain-html-events.component';

describe('PlainHtmlEventsComponent', () => {
  let component: PlainHtmlEventsComponent;
  let fixture: ComponentFixture<PlainHtmlEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlainHtmlEventsComponent]
    }).compileComponents();
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
    spyOn(button, 'click');
    button.click();
    expect(button.click).toHaveBeenCalled();
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

  it('input blur event gets called', () => {
    const input = helpers.getNativeHtmlElement(fixture, 'input');
    spyOn(input, 'blur');
    input.blur();
    expect(input.blur).toHaveBeenCalledTimes(1);
  });
});
