import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;

  constructor(    private cartService: CartService   ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    // console.log('items:', this.items)
  }

  onDeleteItem(index) {
    this.cartService.removeItem(index);
  }

}
