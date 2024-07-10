import { Component, Input } from '@angular/core';
import { Products } from '../../helper/interfaces/products.interfaces';
import { YesNoPipe } from "../../helper/pipes/yes-no.pipe";

@Component({
  selector: 'app-products-grid',
  standalone: true,
  imports: [YesNoPipe],
  templateUrl: './products-grid.component.html',
  styleUrl: './products-grid.component.scss'
})
export class ProductsGridComponent {
  @Input({required: true}) product!: Products
}
