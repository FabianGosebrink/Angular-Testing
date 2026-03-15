import { TestBed } from '@angular/core/testing';

import { ProductDetailService } from './product-detail.service';
import { HttpClient } from '@angular/common/http';
import { provideMock } from '../../testing/auto-mock';

describe('ProductDetailService', () => {
  let service: ProductDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMock(HttpClient)],
    });
    service = TestBed.inject(ProductDetailService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
