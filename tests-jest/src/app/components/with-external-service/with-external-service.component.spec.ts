import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { getDebugElement, getInnerHtml } from '../../helpers/DOM-helpers';
import { CustomHttpService } from '../../services/http-service/http.service';
import { WithExternalServiceComponent } from './with-external-service.component';

describe('WithExternalServiceComponent', () => {
  let component: WithExternalServiceComponent;
  let fixture: ComponentFixture<WithExternalServiceComponent>;
  let service: CustomHttpService;

  const responseObject = {
    name: 'Luke Skywalker',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [WithExternalServiceComponent],
      providers: [CustomHttpService],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithExternalServiceComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CustomHttpService);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should get data when loaded', waitForAsync(() => {
    expect(getDebugElement(fixture, 'span')).toBeFalsy();

    jest.spyOn(service, 'getSingle').mockReturnValue(of(responseObject));

    fixture.detectChanges(); // ngOnInit()

    expect(getDebugElement(fixture, 'span')).toBeDefined();
    expect(getDebugElement(fixture, 'pre')).toBeDefined();

    expect(getInnerHtml(fixture, 'pre')).toBe('Luke Skywalker');
  }));
});
