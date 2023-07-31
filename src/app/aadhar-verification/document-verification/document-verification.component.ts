import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, User } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-document-verification',
  templateUrl: './document-verification.component.html',
  styleUrls: ['./document-verification.component.scss']
})
export class DocumentVerificationComponent implements OnInit {
  userDetails!:User;
  constructor(
    private router: Router,
    private auth:AuthenticationService
  ) { }

  ngOnInit(): void {
    this.userDetails = {...this.auth.getUserDetails()};
    console.log(this.userDetails);
  }

}
