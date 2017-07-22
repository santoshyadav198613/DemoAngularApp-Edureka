import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = { name: '', password: '' };
  constructor(private _router: Router, private _loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    if (this.user.name === 'test' && this.user.password === 'test') {
      this._loginService.login(this.user);
      this._router.navigate(['/employee']);
    }
  }

}
