import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SingleProductComponent } from './product-list/single-product/single-product.component';
import { ProductFormComponent } from './product-list/product-form/product-form.component';
import {ProductsService} from "./services/products.service";
import {HttpClientModule} from "@angular/common/http";
import { CartComponent } from './cart/cart.component';
import { FeatureSliderComponent } from './feature-slider/feature-slider.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactsService } from './services/contacts.service';
import { CheckoutComponent } from './checkout/checkout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    SigninComponent,
    SignupComponent,
    SingleProductComponent,
    ProductFormComponent,
    CartComponent,
    FeatureSliderComponent,
    FooterComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    ProductsService,
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
