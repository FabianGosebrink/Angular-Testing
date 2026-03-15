import { createReducer, on } from '@ngrx/store';
import { ProductDetailActions } from './product-detail.actions';
import { initialProductDetailState } from './product-detail.state';

export const productDetailReducer = createReducer(
  initialProductDetailState,

  on(ProductDetailActions.loadProductSuccess, (state, { product }) => ({
    ...state,
    product,
  })),

  on(ProductDetailActions.loadProduct, (state) => ({
    ...state,
    product: null,
  })),
);
