import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService  {

  baseurl: string = "http://localhost:3000/";
  productQtty = {}

  constructor(private httpclient: HttpClient) {  }

  // getProducts(): Observable<any> {
  //   return this.httpclient.get('http://localhost:3000/products/');
  // }

  getAllProducts(){
    return this.httpclient.get<Product[]>(this.baseurl + 'Products');
  }

  getProductById(id: string){
    return this.httpclient.get<Product>(this.baseurl + 'products/view' + '/' + id);
  }

  // addQuantity(product: any, quantity: number){
  //   // return this.productQtty.push(quantity);
  //   return this.productQtty['quantity'] = quantity;

  // }

}
