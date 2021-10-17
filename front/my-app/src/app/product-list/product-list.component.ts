import {Component, OnInit} from '@angular/core';



import {ProductsService} from '../product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productsService: ProductsService, private route: ActivatedRoute) {
  }
  // products = products.slice(0, 9);
  products: any;

  id;
  getProducts(): void {
    this.productsService.getProducts(this.id).subscribe(products => this.products = products);
  }

  getCategoryId(): void {
    this.id = +this.route.snapshot.paramMap.get('categoryId');
  }

  share(): void {
    window.alert(`Share product?`);
  }

  ngOnInit(): void {
    this.getCategoryId();
    this.getProducts();
  }
}
