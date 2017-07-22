import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  isLoggedIn = false;
  constructor() { }

  login(user) {
    this.isLoggedIn = true;
  }

}
