import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestCompComponent} from "./components/test-comp/test-comp.component";
import {SoonFilmsComponent} from "./components/soon-films/soon-films.component";
import {SharesComponent} from "./components/shares/shares.component";



const routes: Routes = [
  {path: 'test', component: TestCompComponent},
  {path: '', component: SoonFilmsComponent},
  {path: 'actions', component: SharesComponent},
  {path: 'test', component: TestCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
