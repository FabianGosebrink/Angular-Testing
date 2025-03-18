import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  productDetailFeatureKey,
  ProductDetailState,
} from './product-detail.state';

const featureSelector = createFeatureSelector<ProductDetailState>(
  productDetailFeatureKey,
);

export const selectProductDetail = createSelector(
  featureSelector,
  (state: ProductDetailState) => state.product,
);
