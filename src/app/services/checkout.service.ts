import { Injectable } from '@angular/core';
import { Checkout } from '../models/checkout.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private httpclient: HttpClient) {  }

  baseurl: string = "http://localhost:3000/";

  checkout: Checkout;

  postOrderData(data: any) {
        return this.httpclient.post(this.baseurl + 'createOrder', data, {responseType: 'text'})
        .subscribe(
        (val) => {
          console.log('POST call successful value returned in body', val);
        },
        response => {
          console.log('POST call in error', response);
        },
        () => {
          console.log('The POST observable is now completed.');
        });
  }
}
