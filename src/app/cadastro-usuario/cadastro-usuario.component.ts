import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.sass'],
})
export class CadastroUsuarioComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: [''],
      sobrenome: [''],
      email: [''],
      senha: [''],
    });
  }

  ngOnInit(): void {}

  submit() {
    const cadastro = this.form.value;
    console.log(cadastro);
  }
}
