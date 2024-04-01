import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products: Product[] = [];
  formGroupProduct : FormGroup; 

  ngOnInit(): void {
    this.loadProducts();
  }
 loadProducts(){
  this.service.getProducts().subscribe({
    next: data => this.products = data
 });
}
  constructor(private formBuilder: FormBuilder,
        private service: ProductService
        ){
   this.formGroupProduct = formBuilder.group ({
    ID : [''],
    Nome : [''],
    Descricao: [''],
    Preco: [''],
    Quantidade: [''],
   });
 
  } 
 
 save(){
  this.service.save(this.formGroupProduct.value).subscribe({
    next: data => this.products.push (data)
  });

  
   }
 
}
