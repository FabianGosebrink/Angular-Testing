import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, props } from '@ngrx/store';
import { Product } from './product-detail.state';

export const ProductDetailActions = createActionGroup({
  source: '[Product Detail]',
  events: {
    'Load Product': props<{ id: string | undefined }>(),
    'Load Product Success': props<{ product: Product }>(),
    'Load Product Failure': props<{ error: HttpErrorResponse }>(),
  },
});
