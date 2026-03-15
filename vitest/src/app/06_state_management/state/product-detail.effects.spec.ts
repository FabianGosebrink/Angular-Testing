import { lastValueFrom, Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import * as productDetailEffects from '../state/product-detail.effects';
import { ProductDetailActions } from './product-detail.actions';
import { ProductDetailService } from '../services/product-detail.service';
import { Product, ProductCategory } from './product-detail.state';
import { provideMock } from '../../testing/auto-mock';

describe('ProductDetailEffects', () => {
  let actions$: Observable<Action>;
  let productDetailService: ProductDetailService;
  let mockStore: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions$),
        provideMockStore(),
        provideMock(ProductDetailService),
      ],
    });

    productDetailService = TestBed.inject(ProductDetailService);
    mockStore = TestBed.inject(MockStore);
  });

  afterEach(() => {
    mockStore.resetSelectors();
  });

  describe('loadProduct$', () => {
    test('should load products', async () => {
      // arrange
      const id = '11111';
      const product: Product = {
        id,
        name: 'Product 123',
        price: 99,
        category: ProductCategory.BOOK_FANTASY,
        imageUrl: 'foo/bar',
      };

      const loadProductDetailSpy = vi
        .spyOn(productDetailService, 'loadProductDetail')
        .mockReturnValue(of(product));

      actions$ = of(ProductDetailActions.loadProduct({ id }));

      // act
      const result = await TestBed.runInInjectionContext(() =>
        lastValueFrom(productDetailEffects.loadProduct$()),
      );

      // assert
      expect(result).toEqual(ProductDetailActions.loadProductSuccess({ product }));
      expect(loadProductDetailSpy).toHaveBeenCalledWith(id);
    });

    test('should not load products when id is undefined', async () => {
      // arrange
      const id = undefined;
      const product: Product = {
        id: '',
        name: 'Product 123',
        price: 99,
        category: ProductCategory.BOOK_FANTASY,
        imageUrl: 'foo/bar',
      };

      const loadProductDetailSpy = vi
        .spyOn(productDetailService, 'loadProductDetail')
        .mockReturnValue(of(product));

      actions$ = of(ProductDetailActions.loadProduct({ id }));

      // act
      const result = await TestBed.runInInjectionContext(() =>
        lastValueFrom(productDetailEffects.loadProduct$(), { defaultValue: null }),
      );

      // assert
      expect(loadProductDetailSpy).not.toHaveBeenCalled();
      expect(result).toBeNull();
    });
  });
});
