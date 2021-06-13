import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormControlName } from "@angular/forms";

@Component({

    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

  export class LoginComponent {

    form: any;
    // formBuilder: any;
    mensagem!: string;
    emailDB: any;
    senhaDB: any;

    constructor(private formBuilder: FormBuilder) {
        this.criarForm();
    }

    criarForm() {
        this.form = this.formBuilder.group({
            email: ['emailDB: string = "email@teste.com"'],
            senha: ['senhaDB: string = "12345"'],
            mensagem: ['mensagem: string']
        })
    }

    login() {
        if (this.form.get('email').value == this.emailDB && this.form.get('senha').value == this.senhaDB) {
            this.mensagem = "Login feito com sucesso!";
        } else {
            this.mensagem = "E-mail ou a senha esta errado!";
        }
    }
}





// export class LoginComponent implements OnInit {

//     myForm!: FormGroup;
//     email!: FormControl;
//     password!: FormControl;

//     ngOnInit() {
//         this.email = new FormControl('username', Validators.required);
//         this.password = new FormControl('password', Validators.required);

//         this.myForm = new FormGroup({
//             username: this.email,
//             password: this.password
//         });
//     }
// }
