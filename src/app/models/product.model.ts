export class Product {
  id: number;
  name: string;
  description: string;
  list_price: number;
  image_medium: string;
  extId: number;
  quantity: number;

  constructor(name: string, description: string, quantity: number) {
    this.name = name
    this.description = description
    this.quantity = quantity
  }
}


// export class Product {
//   extId: number;
//   name: string;
//   list_price: number;
//   description: string;
//   image_medium: string;
// }
