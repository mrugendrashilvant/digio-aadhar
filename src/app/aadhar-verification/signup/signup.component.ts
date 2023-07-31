import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService, User } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public userDetails: any;
  emailForm!: FormGroup;
  submitted:boolean = false;
  form:any;

  constructor(
    private auth:AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.auth.clearUserDetails();
    this.setUserDetails();
  }

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    })

    this.form = this.emailForm.controls;
  }

  setUserDetails(){
    this.userDetails = {...this.auth.getUserDetails()};
  }

  onSubmit(){
    this.submitted = true;
    if(this.emailForm.invalid) return;
    console.log(this.emailForm.value);

    this.auth.updateUserDetails({email: this.emailForm.value?.email, isLoggedIn: true} as User);
    this.router.navigate(['/document-verification'])
  }

}
