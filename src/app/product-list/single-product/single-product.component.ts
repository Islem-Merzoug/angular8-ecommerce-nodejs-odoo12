import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
// import { products } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})

export class SingleProductComponent implements OnInit{

  productID: any; //Getting Product id from URL
  productData: any; //Getting Product details
  result: any;
  product: Product;
  quantityForm: FormGroup;


  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private cartService: CartService,
              private router: Router,
              private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.productID = this.route.snapshot.params['productId']
    this.loadSingleProduct(this.productID);
    this.initForm();
  }

  initForm() {
    this.quantityForm = this.formBuilder.group({
      quantity: ['', Validators.required],
    });
  }

  // onSaveQuantity() {
  //   const qtty = this.quantityForm.get('quantity').value;
  //   const quantity = {'quantity': qtty}
  //   console.log('quantity:',quantity)
  //   return quantity
  // }



  addToCart(product) {
    const quantity = this.quantityForm.get('quantity').value;
    // const quantity = {'quantity': qtty}
    console.log('quantity:', quantity)
    // return quantity


    // console.log("product:",product)
    // product.push(quantity)
    product['quantity'] = quantity;
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  // addToCart(product) {
  //   console.log("product:",product)
  //   // const productQtty = product.addQuantity(this.onSaveQuantity())
  //   this.cartService.addToCart(product);
  //   window.alert('Your product has been added to the cart!');
  // }

  loadSingleProduct(productID){
    this.result = this.productsService.getProductById(productID).subscribe(product => {
      this.productData = product;
      console.log('productData:',this.productData)
    });
  }

  onBack() {
    this.router.navigate(['/products']);
  }


}
