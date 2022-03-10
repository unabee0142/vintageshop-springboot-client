import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { CustomerComponent } from './components/pages/customer/customer.component';
import { EditCustomerComponent } from './components/pages/edit-customer/edit-customer.component';
import { AddCustomerComponent } from './components/pages/add-customer/add-customer.component';
import { ProductComponent } from './components/pages/product/product.component';
import { EditProductComponent } from './components/pages/edit-product/edit-product.component';
import { AddProductComponent } from './components/pages/add-product/add-product.component';
import { SalesComponent } from './components/pages/sales/sales.component';
import { AddSalesComponent } from './components/pages/add-sales/add-sales.component';
import { EditSalesComponent } from './components/pages/edit-sales/edit-sales.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CustomerComponent,
    EditCustomerComponent,
    AddCustomerComponent,
    ProductComponent,
    EditProductComponent,
    AddProductComponent,
    SalesComponent,
    AddSalesComponent,
    EditSalesComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
