import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Create a routes Array
const routes: Routes = [
  {
    path: '',
    loadChildren: ()=>import('./aadhar-verification/aadhar-verification.module').then((m)=>m.AadharVerificationModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
