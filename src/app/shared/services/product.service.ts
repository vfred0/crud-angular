import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API = 'http://localhost:3000/product';
  
  constructor(private http: HttpClient) {  }


  newProduct(product: Product) {
    return this.http.post(this.API, product);    
  }

  getProducts(): Observable<Product[]> {  
    return this.http.get<Product[]>(this.API);
    
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.API}/${id}`);
  }

  updateProduct(product: Product):void {
    this.http.put<void>(`${this.API}/${product.id}`, product).subscribe();
  }

  deleteProduct(id: number):void {
    this.http.delete<void>(`${this.API}/${id}`).subscribe();
  }

}
