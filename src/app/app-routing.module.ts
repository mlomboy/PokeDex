import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';


const routes: Routes = [  
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
{ path: 'pokemon', component: DashboardComponent },
{ path: 'pokemon-detail/:name', component: PokemonDetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
