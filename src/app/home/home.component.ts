import { Component } from '@angular/core';
import {  Products } from '../products';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  products: Products[] = [];
  constructor(private prod: ProductsService){
    prod.getAllProductList().subscribe(data=>{
      this.products= data
      this.filterProductList = this.products
    })
    
  }
  
  filterProductList: Products[] = []

  searching: string = ''
  filterResults(){
    if(!this.searching){
      this.filterProductList = this.products
    }
    this.filterProductList=this.products.filter(
      item=>item?.productName.toLowerCase().includes(this.searching.toLowerCase())
    )
  }
  
}
