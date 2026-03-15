import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, OperatorFunction } from 'rxjs';
import { Product } from '../state/product-detail.state';

const PRODUCTS_URL = 'http/products.json';

function throwIfUndefined<T>(message: string): OperatorFunction<T | undefined, T> {
  return map((value) => {
    if (value === undefined) {
      throw new Error(message);
    }

    return value;
  });
}

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  readonly #http = inject(HttpClient);

  loadProductDetail(id: string): Observable<Product> {
    return this.#http.get<Product[]>(PRODUCTS_URL).pipe(
      map((products) => products.find((product) => product.id === id)),
      throwIfUndefined(`Product with id "${id}" was not found`),
    );
  }
}
