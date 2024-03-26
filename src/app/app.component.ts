import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { CartService } from './cart.service';
import { Cart } from './cart';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='Lab10_2';
  cartList: Cart[] =[]
  constructor(private authService: AuthService, private cartService: CartService) {
    this.cartList = cartService.getCartAll() 
  }

  isAuthenticated() {
    return this.authService.isAuthenticated
  }
  logout() {
    this.authService.logout()
  }
  ItemCount() { 
    return this.cartService.totalItems() 
  }
}
