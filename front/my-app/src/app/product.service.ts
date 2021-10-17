import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Category, Product, LoginResponse, Address, Delivery} from './models';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {
  }
  deleteCategory(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/categories/${id}/`);
  }
  getCategories(): Observable<Category> {
    console.log(this.http.get<Category>(`${this.BASE_URL}/coffee/`));
    return this.http.get<Category>(`${this.BASE_URL}/coffee/`);
  }
  getDeliveryStatus(): Observable<Delivery> {
    console.log(this.http.get<Delivery>(`${this.BASE_URL}/delivery/1`));
    return this.http.get<Delivery>(`${this.BASE_URL}/delivery/1`);
  }

  getProducts(id): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/categories/${id}/products`);
  }
  addCategory(address): Observable<Address> {
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   });
    // let options = { headers: headers };
    const body = JSON.stringify(address);
    console.log(body);
    return this.http.post<Address>(`${this.BASE_URL}/address/`, { body});
  }
  login(username, password): Observable<LoginResponse> {
    // @ts-ignore
    // @ts-ignore
    return this.http.post(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }
  // getProducts(id: number): Observable<any> {
  //   return of(products.filter(product => product.category_id === id));
  // }
  //
  // getCategories(): Observable<any> {
  //   return this.http.get<Category[]>(this.categoriesUrl).pipe(
  //       catchError(this.handleError<Category[]>('getCategories', []))
  //     );
  //   //return of(categories);
  // }
  // private categoriesUrl = 'api/categories';  // URL to web api
  // constructor(
  //   private http: HttpClient,
  //
  // ) {}
  // deleteCategory (category: Category | number): Observable<Category> {
  //   const id = typeof category === 'number' ? category : category.id;
  //   const url = `${this.categoriesUrl}/${id}`;
  //
  //   return this.http.delete<Category>(url, this.httpOptions).pipe(
  //     //tap(_ => this.log(`deleted hero id=${id}`)),
  //     catchError(this.handleError<Category>('deleteHero'))
  //   );
  // }
  //
  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     return of(result as T);
  //   };
  // }
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };
}
