import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductAllComponent } from './product-all/product-all.component';


const routes: Routes = [
  {path: '', component:HomeComponent, title: 'Home'},
  {path: 'list',component:ProductListComponent, title: 'Product List'},
  {path: 'product-all', component: ProductAllComponent, title:'Product all'},
  {path: 'product-details/:id', component: ProductDetailsComponent, title: 'Product Details'},
  {path: 'cart/:id', component: CartComponent, title: 'Product cart'},
  {path: 'login', component: LoginComponent, title:'Login'},
  {path: 'register', component: RegisterComponent, title:'Register'},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
