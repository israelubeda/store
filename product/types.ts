export interface Product {
  id: string;
  title: string;
  category: string;
  autore: string;
  editorial: string;
  description: string;
  image: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}
