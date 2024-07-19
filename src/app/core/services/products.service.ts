import { Injectable } from '@angular/core';
import { Products } from '../../helper/interfaces/products.interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _products: Products[] = [];
  constructor(private _productServise: HttpClient ) {
    
    

   
    
  
    
   }
   getProducts(){
    return this._productServise.get<any>('https://fakestoreapiserver.reactbd.com/products')
   }
}
