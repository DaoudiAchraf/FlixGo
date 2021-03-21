import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from './auth.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [MessageService]
})
export class SignUpComponent implements OnInit {

  email='dsd';

  constructor(public AuthService : AuthService,private messageService: MessageService) {  }

  ngOnInit(): void {
  }

  addSingle(error:string) {
    this.messageService.add({severity:'error', summary:error, detail:'Please verify your informations'});
}

  SignUp(form:NgForm)
  {
    const email = form.value.email;
    const pwd = form.value.pwd;
    console.log("pwd:"+pwd.length);
    console.log(!this.AuthService.validateEmail(email) && pwd.length<5);

    if(this.AuthService.validateEmail(email) && pwd.length>5)
    {
          this.AuthService.addUser(email,pwd,form.value.username);
          console.log(form.value);
    }

    else if (!this.AuthService.validateEmail(email) && pwd.length<5)
      {
          this.addSingle("Enter Your Email and Password");
      }
    else if (pwd.length<5)
      this.addSingle("Password length be at least 6 caracteres");
    else
    this.addSingle("Email Format is invalid ");





  }

}
