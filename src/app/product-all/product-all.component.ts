import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../products';
import { Cart } from '../cart';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-all',
  standalone: true,
  imports: [],
  templateUrl: './product-all.component.html',
  styleUrl: './product-all.component.css'
})
export class ProductAllComponent  {
  
}
