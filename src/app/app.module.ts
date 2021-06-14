import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
          { path: 'login', component: LoginComponent },
          { path: 'cadastro', component: CadastroComponent }
        ])
      ],
    declarations: [
        AppComponent,
        LoginComponent,
        CadastroComponent
    ],

    providers: [],
    bootstrap: [AppComponent],
})

export class AppModule { }