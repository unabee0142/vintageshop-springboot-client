import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/pages/add-customer/add-customer.component';
import { AddProductComponent } from './components/pages/add-product/add-product.component';
import { AddSalesComponent } from './components/pages/add-sales/add-sales.component';
import { CustomerComponent } from './components/pages/customer/customer.component';
import { EditCustomerComponent } from './components/pages/edit-customer/edit-customer.component';
import { EditProductComponent } from './components/pages/edit-product/edit-product.component';
import { EditSalesComponent } from './components/pages/edit-sales/edit-sales.component';
import { MainComponent } from './components/pages/main/main.component';
import { ProductComponent } from './components/pages/product/product.component';
import { SalesComponent } from './components/pages/sales/sales.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "product", component: ProductComponent},
  { path: "product/addproduct", component: AddProductComponent},
  { path: "product/edit/:id", component: EditProductComponent},
  { path: "customer", component: CustomerComponent},
  { path: "customer/addcustomer", component: AddCustomerComponent},
  { path: "customer/edit/:id", component: EditCustomerComponent},
  { path: "sales", component: SalesComponent},
  { path: "sales/addSales", component: AddSalesComponent},
  { path: "sales/edit/:id", component: EditSalesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
