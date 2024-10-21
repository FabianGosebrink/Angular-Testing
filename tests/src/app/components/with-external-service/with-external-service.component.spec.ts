import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { getDebugElement, getInnerHtml } from '../../helpers/DOM-helpers';
import { provideMock } from '../../helpers/auto-mock';
import { WithExternalServiceComponent } from './with-external-service.component';
import { CustomHttpService } from './services/custom-http.service';

describe('WithExternalServiceComponent', () => {
  let component: WithExternalServiceComponent;
  let fixture: ComponentFixture<WithExternalServiceComponent>;
  let service: CustomHttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithExternalServiceComponent],
      providers: [provideMock(CustomHttpService)],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(CustomHttpService);
    jest.spyOn(service, 'getSingle').mockReturnValue(
      of({
        name: 'Luke Skywalker',
      }),
    );

    fixture = TestBed.createComponent(WithExternalServiceComponent);
    component = fixture.componentInstance;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should get data when loaded', waitForAsync(() => {
    expect(getDebugElement(fixture, 'span')).toBe(null);
    expect(getDebugElement(fixture, 'pre')).toBe(null);

    fixture.detectChanges();

    expect(getDebugElement(fixture, 'span')).toBeTruthy();
    expect(getDebugElement(fixture, 'pre')).toBeTruthy();

    expect(getInnerHtml(fixture, 'pre')).toBe('Luke Skywalker');
  }));
});
