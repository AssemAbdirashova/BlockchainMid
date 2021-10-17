import { Component, OnInit } from '@angular/core';
import {Category, Delivery} from '../models';
import {ProductsService} from '../product.service';

@Component({
  selector: 'app-delivery-status',
  templateUrl: './delivery-status.component.html',
  styleUrls: ['./delivery-status.component.css']
})
export class DeliveryStatusComponent implements OnInit {
  delivery: Delivery;
  constructor( private productsService: ProductsService,
  ) {
    // this.router.events.subscribe((value => {
    //   this.getCategories();
    //   this.getProducts();
    // }));
  }

  ngOnInit(): void {
    this.getDeliveryStatus();
  }
  getDeliveryStatus(): void {
    this.productsService.getDeliveryStatus().subscribe(delivery => this.delivery = delivery);
  }

}
