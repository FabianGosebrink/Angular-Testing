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

    service = TestBed.inject(CustomHttpService);

    jest.spyOn(service, 'getSingle').mockReturnValue(
      of({
        name: 'Luke Skywalker',
      }),
    );
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithExternalServiceComponent);
    component = fixture.componentInstance;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should get data when loaded', waitForAsync(() => {
    // arrange
    const spanBefore = getDebugElement(fixture, 'span');
    const preBefore = getDebugElement(fixture, 'pre');

    // act
    fixture.detectChanges();

    // assert
    expect(spanBefore).toBe(null);
    expect(preBefore).toBe(null);
    expect(getDebugElement(fixture, 'span')).toBeTruthy();
    expect(getDebugElement(fixture, 'pre')).toBeTruthy();
    expect(getInnerHtml(fixture, 'pre')).toBe('Luke Skywalker');
  }));
});
