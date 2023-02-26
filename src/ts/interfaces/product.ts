export interface ProductInterface {
  id: number;
  name: string;
  images: Array<string>;
  categoryId: number;
  description: string;
  price: number;
  stock: number;
}
