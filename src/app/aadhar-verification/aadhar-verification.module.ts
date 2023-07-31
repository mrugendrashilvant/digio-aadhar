import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AadharVerificationRoutingModule } from './aadhar-verification-routing.module';
import { AadharVerificationComponent } from './aadhar-verification.component';


@NgModule({
  declarations: [
    AadharVerificationComponent
  ],
  imports: [
    CommonModule,
    AadharVerificationRoutingModule
  ]
})
export class AadharVerificationModule { }
