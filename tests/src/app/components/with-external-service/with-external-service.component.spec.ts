import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { getDebugElement, getInnerHtml } from '../../../helpers/DOM-helpers';
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
      imports: [BrowserModule, HttpClientTestingModule],
      declarations: [WithExternalServiceComponent],
      providers: [CustomHttpService],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithExternalServiceComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CustomHttpService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(
    '(IntegrationTest) should get data when loaded',
    waitForAsync(() => {
      expect(
        getDebugElement<WithExternalServiceComponent>(fixture, 'span')
      ).toBeFalsy();

      const spy = spyOn(service, 'getSingle').and.returnValue(
        of(responseObject).pipe(delay(500))
      );
      fixture.detectChanges(); // ngOnInit()

      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(spy.calls.any()).toBe(true, 'getSingle called');
        expect(
          getDebugElement<WithExternalServiceComponent>(fixture, 'span')
        ).toBeDefined();
        expect(
          getDebugElement<WithExternalServiceComponent>(fixture, 'pre')
        ).toBeDefined();
        expect(component.result$).toBeDefined();

        expect(getInnerHtml<WithExternalServiceComponent>(fixture, 'pre')).toBe(
          'Luke Skywalker'
        );
      });
    })
  );
});
