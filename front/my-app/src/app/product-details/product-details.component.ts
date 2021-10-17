import { Component, OnInit } from '@angular/core';

import {products} from '../products';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  private location: Location;

  constructor(private route: ActivatedRoute) { }

  getProduct() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('id')];
    });
  }

  ngOnInit(): void {
    this.getProduct();
  }


}

