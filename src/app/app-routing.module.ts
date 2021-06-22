import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeefGrillGameComponent } from './components/beef-grill-game/beef-grill-game.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'beef-grill-game', component: BeefGrillGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
