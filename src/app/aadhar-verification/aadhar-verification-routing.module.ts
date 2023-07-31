import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AadharVerificationComponent } from './aadhar-verification.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { DocumentVerificationComponent } from './document-verification/document-verification.component';

const routes: Routes = [
  {
    path: "",
    component: SignupComponent
  },
  {
    path: "document-verification",
    canActivate: [AuthGuard],
    component: DocumentVerificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AadharVerificationRoutingModule { }
