import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from '../../app-routing.module';
import { DasboardContentComponent } from './dashboard/dasboard-content/dasboard-content.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    DasboardContentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
