import { Injectable } from '@angular/core';
import { Products } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  protected productsList: Products[] = [];
  private URL = 'http://localhost:3000/product'
  getProduct() {
    return this.productsList;
  }
  getAllProductList(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.URL}`)
  }
  getProductId(id: number): Products | undefined {
    return this.productsList.find(i => i.id == id)
  }
  getProductId1(id: number){
    return this.http.get<Products>(`${this.URL}/${id}`)
  }
  AddProduct(frmProduct: any): Observable<Products[]> {
    return this.http.post<Products[]>(`${this.URL}`, frmProduct)
  }
  EditProduct(index: number) {
    return this.productsList[index];
  }
  UpdateProduct(id: number, frmProduct: any): Observable<Products[]> {
    return this.http.put<Products[]>(`${this.URL}/${id}`, frmProduct)
  }
  DeleteProduct(id: number): Observable<Products[]> {
    return this.http.delete<Products[]>(`${this.URL}/${id}`)
  }
  AutoId() {
    let max = 1;
    this.productsList.forEach(item=>{
      if(item.id > max)
      max = item.id;
    })
    return max + 1;
  }
}
