import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InlineTemplateComponent } from './inline-template.component';

describe('InlineTemplateComponent', () => {
  let component: InlineTemplateComponent;
  let fixture: ComponentFixture<InlineTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlineTemplateComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineTemplateComponent);
    component = fixture.componentInstance;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should set the name', () => {
    expect(component.name).toBe(undefined);
    fixture.detectChanges();
    expect(component.name).not.toBe('');
  });

  test('should display the name', () => {
    expect(component.name).toBe(undefined);
    fixture.detectChanges();
    const div = fixture.debugElement.query(By.css('div'));

    expect(div.nativeElement.innerHTML).toBe(component.name);
  });
});
