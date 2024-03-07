import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-r-builder-login',
  templateUrl: './r-builder-login.component.html',
  styleUrls: ['./r-builder-login.component.css']
})
export class RBuilderLoginComponent implements OnInit {
  constructor(private fb: FormBuilder){}
  loginForm = this.fb.group({
    email:[''],
    password:['', [Validators.required, this.pwdValidater('abc')]],
    mobile:[''],
    notification: []
  });
  getLoginData() {
    // this.loginForm.setValue({email:'abc@gtt.com',password:'abc'});
    this.loginForm.patchValue({password:'abcfff'});
    console.log(this.loginForm.status);
  }

  // pwdValidater(control: AbstractControl): { [key: string]: boolean } | null {
  //   console.log(control.value);
  //   if (control.value === 'chandra') {
  //     return { 'pwdValid': true };
  //   }
  //   return null;
  // }

  pwdValidater(pVal:string): ValidatorFn{
    return (control: AbstractControl):{[key:string]:boolean}| null => {
      if(control.value === pVal){
        return {'pwdValid': true}
      } else{
        return null;
      }
    }
  }

  ngOnInit() {
    this.loginForm.controls['notification'].valueChanges.subscribe((newVal)=>{
      console.log(newVal);
      const emailControl = this.loginForm.controls['email'];
      if(newVal === 'email'){
        emailControl.setValidators([Validators.required])
      }
      emailControl.updateValueAndValidity();
    })
  }

  


}
