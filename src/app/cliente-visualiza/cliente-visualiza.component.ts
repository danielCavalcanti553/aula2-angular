import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Cliente } from 'src/model/Cliente';
import { listaCliente } from 'src/environments/dados-cliente';

@Component({
  selector: 'app-cliente-visualiza',
  templateUrl: './cliente-visualiza.component.html',
  styleUrls: ['./cliente-visualiza.component.css']
})
export class ClienteVisualizaComponent implements OnInit {

  clientes : Cliente[] = listaCliente;
  cliente : Cliente;

  constructor(private route: ActivatedRoute,
    private router: Router) {

      this.route.paramMap.subscribe(resp=>{

        this.cliente = this.clientes.find(function(cliente){
          return cliente.id === resp.get('id');;
        });
      });

  }

  ngOnInit(): void {
    
  }







}
