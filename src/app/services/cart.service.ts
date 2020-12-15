import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  baseurl: string = "http://localhost:3000/";

  constructor(    private http: HttpClient    ) {}
    

  addToCart(product) {
    this.items.push(product);
    console.log(this.items)
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  
  getShippingPrices() {
    return this.http.get<Product[]>(this.baseurl + 'Products');
  }

  removeItem(index){
    this.items.splice(index);
    console.log(this.items);
  }

}