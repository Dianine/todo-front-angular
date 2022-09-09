import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  ngOnInit() {}

  submit() {
    const dados = this.formGroup.value;
    console.log(dados);
  }
}
