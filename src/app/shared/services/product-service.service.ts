import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/core/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private API = 'http://localhost:3000/api/products';
  
  
  constructor(private http: HttpClient) {  }


  newProduct(product: Product) {
    return this.http.post(this.API, product);    
  }

  getProducts(): void {
    
    // return this.http.get<Product[]>(this.API).pipe(

      
    // );
  }

  getProduct(id: number) {
    return this.http.get(this.API + id);
  }

  updateProduct(product: Product) {
    return this.http.put(this.API + product.id, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.API + id);
  }


}
