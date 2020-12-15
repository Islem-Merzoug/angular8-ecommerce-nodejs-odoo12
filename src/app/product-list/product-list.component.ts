import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import {DomSanitizer} from "@angular/platform-browser";
import { Product } from '../models/product.model';
// import { products } from '../models/products';

import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  lstProducts: Product[];
  image: any;

  constructor(private productsService: ProductsService,
              private sanitizer: DomSanitizer,
              private router: Router,
              private cartService: CartService) { }

  ngOnInit() {
    this.productsService.getAllProducts()
      .subscribe(
        data => {
          this.lstProducts = data;
          this.image = this.lstProducts[0] && this.lstProducts[0].image_medium;
          console.log();

        }
      );
  }

  getImg(id: string){
      this.image = this.lstProducts[id] && this.lstProducts[id].image_medium;
      // return console.log(this.image);
  }


  onViewProduct(id: number) {
    this.router.navigate(['/products', 'view', id]);
  }


}
