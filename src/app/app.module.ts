import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import {  routing } from './app-routing.module'; //AppRoutingModule
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      CadastroComponent,
  ],
    imports: [
      BrowserModule,
        ReactiveFormsModule,
        routing,
        FormsModule
      ],

    providers: [],
    bootstrap: [AppComponent],
})

export class AppModule { }

