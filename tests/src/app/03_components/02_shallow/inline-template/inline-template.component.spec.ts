import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InlineTemplateComponent } from './inline-template.component';
import { By } from '@angular/platform-browser';

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
    const innerHtmlBefore = fixture.debugElement.query(By.css('div'))
      .nativeElement.innerHTML;

    // act
    fixture.detectChanges();

    // assert
    const innerHtmlAfter = fixture.debugElement.query(By.css('div'))
      .nativeElement.innerHTML;

    expect(component.name).toBe('Fabian');
    expect(innerHtmlBefore).toBe('');
    expect(innerHtmlAfter).toBe(component.name);
  });
});
