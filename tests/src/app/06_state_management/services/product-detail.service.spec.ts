import { TestBed } from '@angular/core/testing';

import { ProductDetailService } from './product-detail.service';
import { MockProvider } from 'ng-mocks';
import { HttpClient } from '@angular/common/http';

describe('ProductDetailService', () => {
  let service: ProductDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockProvider(HttpClient)],
    });
    service = TestBed.inject(ProductDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
