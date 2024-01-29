import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Route par défaut (page d'accueil)
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component:PortfolioComponent },
  // ... Ajoutez d'autres routes selon votre application
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
