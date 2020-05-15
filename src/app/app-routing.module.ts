import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestCompComponent} from './components/test-comp/test-comp.component';
import {SoonFilmsComponent} from './components/soon-films/soon-films.component';
import {SharesComponent} from './components/shares/shares.component';
import {FilmsOnScreenComponent} from './components/films-on-screen/films-on-screen.component';
import {SingleFilmComponent} from './components/single-film/single-film.component';
import {SingleTicketsComponent} from './components/single-tickets/single-tickets.component';



const routes: Routes = [
  {path: 'info', component: TestCompComponent},
  {path: '', component: SoonFilmsComponent},
  {path: 'actions', component: SharesComponent},
  {path: 'film', component: FilmsOnScreenComponent},
  {path: 'film/:id', component: SingleFilmComponent},
  {path: 'ticket/:id', component: SingleTicketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
