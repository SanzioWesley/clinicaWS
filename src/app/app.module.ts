import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
          { path: 'login', component: LoginComponent }
        ])
      ],
    declarations: [
        AppComponent,
        LoginComponent
    ],

    providers: [],
    bootstrap: [AppComponent],
})

export class AppModule { }