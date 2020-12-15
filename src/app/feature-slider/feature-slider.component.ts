import { Component, OnInit } from '@angular/core';
// import {  } from "../../assets/CEO";

@Component({
  selector: 'app-feature-slider',
  templateUrl: './feature-slider.component.html',
  styleUrls: ['./feature-slider.component.scss']
})
export class FeatureSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  // images = ['../../assets/CEO', '../../asserts/Best-WooCommerce-Plugins-by-weDevs', '../../asserts/CEO'];


}
