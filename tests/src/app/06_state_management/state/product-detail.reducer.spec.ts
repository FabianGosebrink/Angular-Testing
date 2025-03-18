import { productDetailReducer } from './product-detail.reducer';
import { ProductDetailActions } from './product-detail.actions';
import {
  initialProductDetailState,
  Product,
  ProductCategory,
  ProductDetailState,
} from './product-detail.state';

describe('ProductDetailReducer', () => {
  describe('loadProductSuccess', () => {
    it('should add product to state', () => {
      // arrange
      const product: Product = {
        id: '444',
        name: 'My Product',
        price: 99,
        category: ProductCategory.BOOK_FANTASY,
        imageUrl: 'some.url/foo',
      };

      const action = ProductDetailActions.loadProductSuccess({ product });

      // act
      const result = productDetailReducer(initialProductDetailState, action);

      // assert
      expect(result.product).toEqual(product);
    });
  });

  describe('loadProduct', () => {
    it('should set product to null', () => {
      // arrange
      const product: Product = {
        id: '444',
        name: 'My Product',
        price: 99,
        category: ProductCategory.BOOK_FANTASY,
        imageUrl: 'some.url/foo',
      };
      const state: ProductDetailState = {
        ...initialProductDetailState,
        product,
      };
      const action = ProductDetailActions.loadProduct({ id: '1' });

      // act
      const result = productDetailReducer(state, action);

      // assert
      expect(result.product).toBeNull();
    });
  });
});
