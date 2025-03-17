import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getInnerHtml } from '../../../helpers/DOM-helpers';
import { InlineTemplateComponent } from './inline-template.component';

describe('InlineTemplateComponent', () => {
  let component: InlineTemplateComponent;
  let fixture: ComponentFixture<InlineTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InlineTemplateComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineTemplateComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the name', () => {
    // arrange
    const innerHtmlBefore = getInnerHtml(fixture, 'div');

    // act
    fixture.detectChanges();

    // assert
    const innerHtmlAfter = getInnerHtml(fixture, 'div');

    expect(component.name).toBe('Fabian');
    expect(innerHtmlBefore).toBe('');
    expect(innerHtmlAfter).toBe(component.name);
  });
});
