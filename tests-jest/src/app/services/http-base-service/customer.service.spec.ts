import { TestBed } from '@angular/core/testing';
import { provideMock } from 'src/app/helpers/auto-mock';
import { CustomerService } from './customer.service';
import { HttpService } from './http.service';

describe('CustomerService', () => {
  let customerService: CustomerService;
  let httpService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMock(HttpService)],
    });

    customerService = TestBed.inject(CustomerService);
    httpService = TestBed.inject(HttpService);
  });
});
