import { Component } from '@angular/core';
import { Product } from '../product';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

product: Product[] = [];

 formGroupProduct : FormGroup; 

 constructor(private formBuilder: FormBuilder){
  this.formGroupProduct = formBuilder.group ({
   ID : [''],
   Nome : [''],
   Descricao: [''],
   Preco: [''],
   Quantidade: [''],
  });

 } 

save(){
  this.product.push(this.formGroupProduct.value);
}


}

