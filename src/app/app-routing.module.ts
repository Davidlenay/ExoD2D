import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/pages/home/home.component';
import { CreateCupComponent } from './cup/pages/create-cup/create-cup.component';
import { SearchCupsComponent } from './cup/pages/search-cups/search-cups.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'create-cup', component: CreateCupComponent},
  {path: 'search-cups', component: SearchCupsComponent},
  {path: '**', redirectTo: '/home'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
