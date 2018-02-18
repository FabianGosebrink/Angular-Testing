import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { getInnerHtml } from '../../../helpers/DOM-helpers';
import { CustomHttpService } from '../../services/http-service/http.service';
import { WithExternalServiceComponent } from './with-external-service.component';

describe('WithExternalServiceComponent', () => {
  let component: WithExternalServiceComponent;
  let fixture: ComponentFixture<WithExternalServiceComponent>;
  let service: CustomHttpService;

  const responseObject = {
    name: 'Luke Skywalker'
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [BrowserModule, HttpClientTestingModule],
        declarations: [WithExternalServiceComponent],
        providers: [CustomHttpService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WithExternalServiceComponent);
    component = fixture.componentInstance;
    service = TestBed.get(CustomHttpService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(IntegrationTest) should get data when loaded', () => {
    expect(component.result$).not.toBeDefined();
    expect(getInnerHtml<WithExternalServiceComponent>(fixture, 'pre')).toBe('');

    const spy = spyOn(service, 'getSingle').and.returnValue(of(responseObject));

    fixture.detectChanges();
    expect(spy.calls.any()).toBe(true, 'getSingle called');
    expect(component.result$).toBeDefined();

    expect(getInnerHtml<WithExternalServiceComponent>(fixture, 'pre')).toBe(
      responseObject.name
    );
  });
});
