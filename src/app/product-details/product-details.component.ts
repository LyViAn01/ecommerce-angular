import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Cart } from '../cart';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  implements OnInit {
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
      this.prod.getProductId1(id).subscribe(data=>{
        this.productDetail = data
      })
      this.InStock = this.productDetail?.inStock!
    }
    Add() { 
      this.cartService.addCart(this.productDetail?.id!, this.productDetail)
      this.InStock = this.cartService.getInStock(this.productDetail?.id!)! 
    } 
}
