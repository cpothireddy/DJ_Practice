import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-r-login',
  templateUrl: './r-login.component.html',
  styleUrls: ['./r-login.component.css']
})
export class RLoginComponent {
  loginform = new FormGroup({
    'email': new FormControl(null, Validators.required),
    'password': new FormControl(null, [Validators.required, Validators.minLength(8)])
  });
  getFormData(){
    console.log(this.loginform.value);
    console.log(this.loginform.status);
  }
}
