import { TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { provideMock } from '../../helpers/auto-mock';
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

  it('should get all customers', waitForAsync(() => {
    const getAllCustomersSpy = jest
      .spyOn(httpService, 'get')
      .mockReturnValue(of([]));

    const result$ = customerService.getAllCustomers();

    result$.subscribe((result) => {
      expect(getAllCustomersSpy).toHaveBeenCalledTimes(1);
      expect(result).toEqual([]);
      expect(getAllCustomersSpy).toHaveBeenCalledWith('get-all-customers');
    });
  }));
});
