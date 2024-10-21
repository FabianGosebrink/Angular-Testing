import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';
import { MockProvider } from 'ng-mocks';
import { HttpService } from '../../services/http-base-service/http.service';
import { of } from 'rxjs';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;
  let httpService: HttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildComponent],
      providers: [MockProvider(HttpService)],
    }).compileComponents();

    httpService = TestBed.inject(HttpService);

    global.console.log = jest.fn();

    jest.spyOn(httpService, 'get').mockReturnValue(of({}));

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
