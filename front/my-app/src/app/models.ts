export class Category {
  category: Coffee[];
}
export class Coffee {
  id: number;
  name: string;
}
export class Delivery {
  id: number;
  status_id: number;
}
export class Address {
  id: number;
  country: string;
  city: string;
  street: string;
  house: number;
}
export class LoginResponse {
  token: string;
}
export class Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  link: string;
}
