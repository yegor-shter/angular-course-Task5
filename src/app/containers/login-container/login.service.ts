import { Injectable } from '@angular/core';

import { Login } from './Ilogin';

@Injectable()
export class LoginService {
public user : Login;

  constructor() { }

  public  register(user){
    this.user = user;
    localStorage.setItem('user', JSON.stringify(this.user));
  }

}
