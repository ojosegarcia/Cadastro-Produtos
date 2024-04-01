import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:3000/products";

  constructor(private htpp: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.htpp.get<Product[]>(this.url)
  }

  save(product:Product): Observable<Product>{
    return this.htpp.post<Product>(this.url, product);
  }
}
