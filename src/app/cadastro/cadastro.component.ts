import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { Paciente } from '../paciente';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formPaciente!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Paciente());
  }

  createForm(paciente: Paciente) {
    this.formPaciente = this.formBuilder.group({
      cpf: [paciente.cpf],
      nome: [paciente.nome],
      telefone: [paciente.telefone],
      sexo: [paciente.sexo]
      
    })
  }
}

