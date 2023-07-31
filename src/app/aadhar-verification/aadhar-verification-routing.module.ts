import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AadharVerificationComponent } from './aadhar-verification.component';

const routes: Routes = [
  {
    path: "",
    component: AadharVerificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AadharVerificationRoutingModule { }
