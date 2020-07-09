import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  nome = '';
  email = '';
  senha = '';


  constructor() { }

  ngOnInit(): void {
  }
  /*cadastrar() {
  return new Promise(() => {
    const dados = {

      nome: this.nome,
      email: this.email,
      senha: this.senha
    };
  });
}*/
}

