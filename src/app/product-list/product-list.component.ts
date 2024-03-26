import { Component, Input } from '@angular/core';
import { Products } from '../products';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() productList: Products[] = []
  showRating(str: any){
    alert(`${str}`)
  }
  formProduct=new FormGroup({
    // productId: new FormControl<number>(1),
    productName: new FormControl<string>(''),
    color: new FormControl<string>(''),
    releaseDate: new FormControl<string>(''),
    price: new FormControl<number>(0),
    description: new FormControl<string>(''),
    starRating: new FormControl<number>(5),
    imageUrl: new FormControl<string>('')
  })
  constructor(private prod: ProductsService){
    prod.getAllProductList().subscribe(data=>{
      this.productList=data
    });
  }
  ngOnInit(): void{
    this.formProduct.controls['imageUrl'].setValue('./assets/images')
    this.prod.getAllProductList().subscribe(data =>{
      this.productList=data
    })
  }
  file: string = ''
  IsAdd: number = 1
  IsUpdate: number = 0
  Add(){
    // this.formProduct.controls['productId'].setValue(this.prod.AutoId())
    this.formProduct.controls['imageUrl'].setValue(this.file)
    this.prod.AddProduct(this.formProduct.value).subscribe(res =>{
      this.ngOnInit()
    })
  }
  id: any
  Edit(index: number) {
    this.id=this.productList[index].id
    this.formProduct.controls['productName'].setValue(this.productList[index].productName)
    this.formProduct.controls['color'].setValue(this.productList[index].color)
    this.formProduct.controls['releaseDate'].setValue(this.productList[index].releaseDate)
    this.formProduct.controls['price'].setValue(this.productList[index].price)
    this.formProduct.controls['description'].setValue(this.productList[index].description)
    this.formProduct.controls['imageUrl'].setValue(this.productList[index].imageUrl)
    this.file=this.productList[index].imageUrl
  }
  Update() {
    this.formProduct.controls['imageUrl'].setValue(this.file)
    this.prod.UpdateProduct(this.id, this.formProduct.value).subscribe((result) =>{
      console.log(result)
      this.ngOnInit()
    })
  }
  Delete(index: number) {
    this.id=this.productList[index].id
    this.prod.DeleteProduct(this.id).subscribe((result) =>{
      console.log(result)
      this.ngOnInit()
    })
  } 

  onChange(event: any) {
    let target = event.target as HTMLInputElement;
    this.file = target.value;
}

}
