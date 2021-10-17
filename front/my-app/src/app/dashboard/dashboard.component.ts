import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../product.service';

import {Product, Category, Address} from '../models';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  categories: Category;
  products: Product[] = [];
  public category: any;
  address = new Address();
  name = '';
  id = 0;
  weight = '';
  deliveryDate = '';
  shipmentDate = '';
  country = '';
  city = '';
  street = '';
  houseNum = '';
  constructor(
    private productsService: ProductsService,
    ) {
      // this.router.events.subscribe((value => {
      //   this.getCategories();
      //   this.getProducts();
      // }));
    }

  getCategories(): void {
    this.productsService.getCategories().subscribe(categories => this.categories = categories);
  }
  ngOnInit(): void {
    this.getCategories();
    this.category = {};
  }
  add() {
    this.address.id = this.id;
    this.id++;
    this.productsService.addCategory(this.address).subscribe(
      data => {
        // refresh the list
        this.getCategories();
        return true;
      },
      error => {
        console.error('Error saving!');
        return throwError(error);
      }
    );
  }
  // delete(category: Category): void {
  //   this.categories = this.categories.filter(h => h !== category);
  //   this.productsService.deleteCategory(category).subscribe();
  // }
}
