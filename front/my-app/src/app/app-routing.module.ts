import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DeliveryStatusComponent} from './delivery-status/delivery-status.component';


const routes: Routes = [
  { path: 'category/:categoryId/products', component: ProductListComponent },
  {path: 'products/:id', component: ProductDetailsComponent},
  // { path: '', redirectTo: 'category', pathMatch: 'full' },
  {path: '', component: DashboardComponent},
  { path: 'category', component: DeliveryStatusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
