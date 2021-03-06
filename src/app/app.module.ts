import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JumbutronComponent } from './jumbutron/jumbutron.component';
import { HeaderComponent } from './header/header.component';
import { AddSectionComponent } from './add-section/add-section.component';
import { AddChaineComponent } from './add-chaine/add-chaine.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { AddProductionComponent } from './add-production/add-production.component';
import { QualityComponent } from './quality/quality.component';
import { HistoryComponent } from './history/history.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from "@angular/common/http";
import { PersonPipe } from './person.pipe';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    JumbutronComponent,
    HeaderComponent,
    AddSectionComponent,
    AddChaineComponent,
    HeaderAdminComponent,
    AddProductionComponent,
    QualityComponent,
    HistoryComponent,
    PersonPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added     ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
