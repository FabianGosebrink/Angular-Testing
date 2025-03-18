import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockProvider } from 'ng-mocks';
import * as productDetailEffects from '../state/product-detail.effects';
import { ProductDetailActions } from './product-detail.actions';
import { ProductDetailService } from '../services/product-detail.service';
import { Product, ProductCategory } from './product-detail.state';

describe('ProductDetailEffects', () => {
  let actions$: Observable<Action>;
  let productDetailService: ProductDetailService;
  let mockStore: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions$),
        provideMockStore(),
        MockProvider(ProductDetailService),
      ],
    });

    productDetailService = TestBed.inject(ProductDetailService);
    mockStore = TestBed.inject(MockStore);
  });

  afterEach(() => {
    mockStore.resetSelectors();
  });

  describe('loadProduct$', () => {
    it('should load products', waitForAsync(() => {
      // arrange
      const id = '11111';
      const product: Product = {
        id,
        name: 'Product 123',
        price: 99,
        category: ProductCategory.BOOK_FANTASY,
        imageUrl: 'foo/bar',
      };

      const loadProductDetailSpy = jest
        .spyOn(productDetailService, 'loadProductDetail')
        .mockReturnValue(of(product));

      actions$ = of(ProductDetailActions.loadProduct({ id }));

      // act
      const result$ = TestBed.runInInjectionContext(() =>
        productDetailEffects.loadProduct$(),
      );

      // assert
      result$.subscribe((result) => {
        expect(result).toEqual(
          ProductDetailActions.loadProductSuccess({ product }),
        );
        expect(loadProductDetailSpy).toHaveBeenCalledWith(id);
      });
    }));

    it('should not load products when id is undefined', waitForAsync(() => {
      // arrange
      const id = undefined;
      const product: Product = {
        id: '',
        name: 'Product 123',
        price: 99,
        category: ProductCategory.BOOK_FANTASY,
        imageUrl: 'foo/bar',
      };

      const loadProductDetailSpy = jest
        .spyOn(productDetailService, 'loadProductDetail')
        .mockReturnValue(of(product));

      actions$ = of(ProductDetailActions.loadProduct({ id }));

      // act
      const result$ = TestBed.runInInjectionContext(() =>
        productDetailEffects.loadProduct$(),
      );

      // assert
      result$.subscribe(() => {
        expect(loadProductDetailSpy).not.toHaveBeenCalled();
      });
    }));
  });
});
