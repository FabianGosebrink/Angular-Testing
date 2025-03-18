import {
  initialProductDetailState,
  Product,
  ProductCategory,
  productDetailFeatureKey,
} from './product-detail.state';
import { selectProductDetail } from './product-detail.selectors';

describe('ProductDetailSelectors', () => {
  describe('selectProductDetail', () => {
    it('should select product detail from state', () => {
      // arrange
      const product: Product = {
        id: '444',
        name: 'My Product',
        price: 99,
        category: ProductCategory.BOOK_FANTASY,
        imageUrl: 'some.url/foo',
      };
      const state = {
        [productDetailFeatureKey]: {
          ...initialProductDetailState,
          product,
        },
      };

      // act
      const result = selectProductDetail(state);

      // assert
      expect(result).toEqual(product);
    });
  });
});
