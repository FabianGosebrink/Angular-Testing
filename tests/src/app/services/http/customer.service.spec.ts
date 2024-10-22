import { TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { CustomerService } from './customer.service';
import { HttpService } from './http.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('CustomerService', () => {
  let customerService: CustomerService;
  let httpService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // providers: [provideMock(HttpService)],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    customerService = TestBed.inject(CustomerService);
    httpService = TestBed.inject(HttpService);
  });

  it('should get all customers', waitForAsync(() => {
    // arrange
    const getAllCustomersSpy = jest
      .spyOn(httpService, 'get')
      .mockReturnValue(of([]));

    // act
    const result$ = customerService.getAllCustomers();

    // assert
    result$.subscribe((result) => {
      expect(getAllCustomersSpy).toHaveBeenCalledTimes(1);
      expect(result).toEqual([]);
      expect(getAllCustomersSpy).toHaveBeenCalledWith('get-all-customers');
    });
  }));
});
