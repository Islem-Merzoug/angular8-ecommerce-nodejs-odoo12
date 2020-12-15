import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { CheckoutService } from '../services/checkout.service'

import { Checkout } from "../models/checkout.model";
import { from } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  myCart;
  checkout;

  constructor(private formBuilder: FormBuilder,
              private cartService: CartService,
              private router: Router,
              private checkoutService: CheckoutService) { }

  ngOnInit() {
    this.initForm();
    // this.cartItems();
    this.cartItems(this.cartService.getItems());
  }

  initForm() {
    this.checkoutForm = this.formBuilder.group({
      full_name: ['', Validators.required],
      address_line_1: ['', Validators.required],
      address_line_2: ['', Validators.required],
      city: ['', Validators.required],
      region: ['', Validators.required],
      zip: ['', Validators.required],
      phone_number: ['', Validators.required]
    });
  }

  onSaveCheckoutForm() {
    const full_name = this.checkoutForm.get('full_name').value;
    const address_line_1 = this.checkoutForm.get('address_line_1').value;
    const address_line_2 = this.checkoutForm.get('address_line_2').value;
    const city = this.checkoutForm.get('city').value;
    const region = this.checkoutForm.get('region').value;
    const zip = this.checkoutForm.get('zip').value;
    const phone_number = this.checkoutForm.get('phone_number').value;
    const cart = this.cartService.getItems();

    const newCheckout = new Checkout(full_name, address_line_1, address_line_2, city, region, zip, phone_number, cart);
    console.log('newCheckout: ', newCheckout);
    this.postOrder(newCheckout);
  }

  postOrder(data: any){
    this.checkoutService.postOrderData(data);
  }

  cartItems(cart: any) {
    cart = this.cartService.getItems();
    console.log('my cartt: ', cart);
  }

  // cartItems() {
  //   this.myCart = this.cartService.getItems();
  //   console.log('my cart: ',this.myCart);
  // }
}
