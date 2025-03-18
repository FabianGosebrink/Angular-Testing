import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { Product } from '../state/product-detail.state';

function checkValueDefined<T>() {
  return pipe(
    map((value: T | undefined) => {
      if (value === undefined) {
        throw new Error('Value is undefined');
      }

      return value as T;
    }),
  );
}

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  private readonly http = inject(HttpClient);

  loadProductDetail(id: string): Observable<Product> {
    return this.http.get<Product[]>('http/products.json').pipe(
      map((products) => products.find((p) => p.id === id)),
      checkValueDefined(),
    );
  }
}
