import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AadharVerificationRoutingModule } from './aadhar-verification-routing.module';
import { AadharVerificationComponent } from './aadhar-verification.component';
import { SignupComponent } from './signup/signup.component';
import { DocumentVerificationComponent } from './document-verification/document-verification.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AadharVerificationComponent,
    SignupComponent,
    DocumentVerificationComponent
  ],
  imports: [
    CommonModule,
    AadharVerificationRoutingModule,
    ReactiveFormsModule
  ]
})
export class AadharVerificationModule { }
