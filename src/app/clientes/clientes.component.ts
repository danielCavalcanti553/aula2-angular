import { Component, OnInit } from '@angular/core';
import { Cliente } from "../../model/Cliente";
import { listaCliente } from "../../environments/dados-cliente";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes : Cliente[] = listaCliente;
  constructor() { }

  ngOnInit(): void {
  }

}
