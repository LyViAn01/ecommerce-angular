import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';
import { Cart } from '../cart';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {
  @Input() productHome: Products[] =[]
  productDetail: Products | undefined
  cartList: Cart[] =[]
  InStock: number = 0
  constructor(private router: ActivatedRoute, 
    private prod: ProductsService,
    private cartService: CartService) { 
    this.cartList = cartService.getCartAll() 
  } 
    ngOnInit(): void{
      let id = Number(this.router.snapshot.params['id'])
      this.productDetail = this.prod.getProductId(id)
      this.InStock = this.productDetail?.inStock!
    }
    Add() { 
      this.cartService.addCart(this.productDetail?.id!, this.productDetail)
      this.InStock = this.cartService.getInStock(this.productDetail?.id!)! 
    } 
}
