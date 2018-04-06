import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../domain/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
clientes: Cliente[];
  constructor(private clienteservice : ClienteService) {
    this.getClientes();
   }

  ngOnInit() {
  }
  getClientes(){
    this.clienteservice.getClientes()
    .subscribe(response =>{
      this.clientes = response;
    })
  }

}
