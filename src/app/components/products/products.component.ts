import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { Product } from '../../models/Product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[];

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data=>{
      this.products=data,
      error => console.log(error);
    })
  }

}
