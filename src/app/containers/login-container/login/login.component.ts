import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from './../login.service';
import { Login }   from './../Ilogin';
import { NgForm } from '@angular/forms';
import { FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('userForm', {read: NgForm})
  public userNgForm: NgForm;

  public user: Login = {email: " ", password: " "};
  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {}
     addUser() {
      this.loginService.register(this.user);
      console.log(this.user);

    }

    printForm() {
      console.log(this.user);
    }


}
