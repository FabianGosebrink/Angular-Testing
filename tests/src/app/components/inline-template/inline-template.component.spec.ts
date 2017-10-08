import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InlineTemplateComponent } from './inline-template.component';

describe('InlineTemplateComponent', () => {
  let component: InlineTemplateComponent;
  let fixture: ComponentFixture<InlineTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlineTemplateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineTemplateComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the name', () => {
    expect(component.name).toBe(undefined);
    fixture.detectChanges();
    expect(component.name).not.toBe('');
  });

  it('should display the name', () => {
    expect(component.name).toBe(undefined);
    fixture.detectChanges();
    const allDivs = fixture.debugElement.queryAll(By.css('div'));

    expect(allDivs[1].nativeElement.innerHTML).toBe(component.name);
  });
});
