import { Component } from '@angular/core';
import { LoginForm } from './login';

@Component({
  selector: 'app-t-login',
  templateUrl: './t-login.component.html',
  styleUrls: ['./t-login.component.css']
})
export class TLoginComponent {
  loginFm:LoginForm;
  constructor(){
    this.loginFm = new LoginForm('aaa@aa.com', 'test');
  }
  onSubmit(form:any){
    console.log(form.value);
  }
}
