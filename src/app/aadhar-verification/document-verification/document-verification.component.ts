import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService, User } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-document-verification',
  templateUrl: './document-verification.component.html',
  styleUrls: ['./document-verification.component.scss']
})
export class DocumentVerificationComponent implements OnInit  {
  @ViewChild('content')content:any;
  userDetails!:User;
  aadharForm!: FormGroup;
  aadharSubmitted:boolean = false;
  aadharFormControl:any;

  otpForm!: FormGroup | undefined;
  otpSubmitted:boolean = false;
  otpFormControl:any;

  disableOtp:boolean = true;
  isLoading:boolean = false;

  loader: {loading: boolean, signing: boolean} = {loading: false, signing: false};


  constructor(
    private router: Router,
    private auth:AuthenticationService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.userDetails = {...this.auth.getUserDetails()};
  }

  dataPreprocessor(){
    if(!this.userDetails?.isDocumentSigned){
      if(this.userDetails?.isAadharVerified){
        this.disableOtp = false;
      }
      this.openModal();
    }
    this.setForms();
  }

  ngAfterViewInit(){
    this.dataPreprocessor();
  }

  setForms(){
    this.aadharForm = this.formBuilder.group({
      aadharNumber: [this.userDetails?.aadharNumber??"", [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^[0-9]*$')]],
      tandc: ["", Validators.required]
    });
    this.aadharFormControl = this.aadharForm.controls;

    this.otpForm = this.formBuilder.group({
      otp: [{value: "", disabled: this.disableOtp}, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });
    this.otpFormControl = this.otpForm.controls;
  }

  openModal(){
    this.modalService.open(this.content, {
      size: 'lg'
    })
  }

  aadharOnSubmit(){
    this.aadharSubmitted = true;
    if(this.aadharForm.invalid) return;
    
    if(!this.aadharForm.value?.tandc) {
      this.aadharFormControl.tandc["errors"] = {
        accepted: false
      }
      return;
    }
    this.auth.updateUserDetails({aadharNumber: this.aadharForm.value?.aadharNumber, isAadharVerified: true} as User);
    this.userDetails = {...this.auth.getUserDetails()};
    this.disableOtp = false;
    this.otpForm = undefined;

    setTimeout(()=>{
      this.otpForm = this.formBuilder.group({
        otp: [{value: "", disabled: false}, [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('^[0-9]*$')]]
      });
      this.otpFormControl = this.otpForm.controls;
    }, 100)
    
  }

  otpOnSubmit(){
    this.otpSubmitted = true;
    if(this.otpForm?.invalid) return;
    if(this.otpForm?.value?.otp != "123456") {
      this.otpFormControl.otp["errors"]={
        invalid: true
      }
      return;
    }
    this.auth.updateUserDetails({isDocumentSigned: true} as User);
    this.userDetails = {...this.auth.getUserDetails()};
    this.modalService.dismissAll();
    this.startLoader()
  }

  startLoader(){
    this.loader.loading = true;
    this.loader.signing = true;
    setTimeout(()=>{
      this.loader.signing = false;
    }, 3000);
    setTimeout(()=>{
      this.loader.loading = false;
    },5000);
  }

}
