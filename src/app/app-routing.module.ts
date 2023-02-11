import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixProblemsComponent } from './fix-problems/fix-problems.component';

const routes: Routes = [
  {
    path: '',
    component: FixProblemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
