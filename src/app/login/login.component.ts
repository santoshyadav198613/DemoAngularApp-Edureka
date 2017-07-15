import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = { name: '', password: '' };
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.user.name === 'test' && this.user.password === 'test') {
      this._router.navigate(['/employee']);
    }
  }

}
