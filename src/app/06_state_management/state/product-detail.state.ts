export enum ProductCategory {
  BOOK_FANTASY = 'book_fantasy',
  BOOK_HISTORY = 'book_history',
  BOOK_ROMANCE = 'book_romance',
}

export type Product = {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  imageUrl: string;
};

export const productDetailFeatureKey = 'productDetail';

export type ProductDetailState = {
  product: Product | null;
};

export const initialProductDetailState: ProductDetailState = {
  product: null,
};
