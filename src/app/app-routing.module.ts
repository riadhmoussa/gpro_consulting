import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChaineComponent } from './add-chaine/add-chaine.component';
import { AddProductionComponent } from './add-production/add-production.component';
import { AddSectionComponent } from './add-section/add-section.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';
import { QualityComponent } from './quality/quality.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'singup', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addSection', component: AddSectionComponent },
  { path: 'addChaine', component: AddChaineComponent },
  { path: 'addProduction', component: AddProductionComponent },
  { path: 'qulaity', component: QualityComponent },
  { path: 'history', component: HistoryComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
