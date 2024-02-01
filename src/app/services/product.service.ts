import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getList(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/Products')
  }
  
  // Delete
  private apiUrl = 'http://localhost:3000/products';

  deleteProduct(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }

  //Add
  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }
  
  // update
  update(id: number, data: any): Observable<any> {
    return this.http.put<any>('http://localhost:3000/products/'+id, data);
  }

  // Get One
  getOne(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:3000/products/'+id);
  }
}
