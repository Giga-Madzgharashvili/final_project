import { Component, Input, OnInit } from '@angular/core';
import { ProductsGridComponent } from "../productsDashbord/products-grid/products-grid.component";
import { CommonModule } from '@angular/common';
import { Products } from '../helper/interfaces/products.interfaces';
import { ProductsService } from '../core/services/products.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductsGridComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  product: Products[] = []

 constructor (private _productService: ProductsService) {
 
 }
 ngOnInit(): void {
  this.product = this._productService.getProducts()
 }
}
