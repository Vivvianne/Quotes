import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormDetailsComponent } from './form-details/form-details.component';

const routes: Routes = [

  { path: 'qoute', component: FormDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
