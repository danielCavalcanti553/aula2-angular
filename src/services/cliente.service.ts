import { Cliente } from "../model/cliente";
import { listaCliente } from "../environments/dados-cliente";

export class ClienteService{
    
    getClientes(){
        return listaCliente;
    }
}// 