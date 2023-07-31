import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-aadhar-verification',
  templateUrl: './aadhar-verification.component.html',
  styleUrls: ['./aadhar-verification.component.scss']
})
export class AadharVerificationComponent implements OnInit {

  constructor(
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

}
