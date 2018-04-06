import { Component, OnInit } from '@angular/core';
import { Categoria } from '../domain/categoria';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria : Categoria[];

  constructor(private categoriaservice : CategoriaService) {
    this.getCategoria();
   }

  ngOnInit() {
  }

  getCategoria(){
    this.categoriaservice.getCategoria()
    .subscribe(response =>{
      this.categoria = response;

    })
  }

}
