import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Product } from '../models/Product'

import {  } from '../models/Product'
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urlGet:string='http://localhost:8080/api/v1/getallproducts';

  constructor(private http:HttpClient) { }

  
  getAllProducts():Observable<Product[]>{

    return this.http.get<Product[]>(this.urlGet);

  }


}
