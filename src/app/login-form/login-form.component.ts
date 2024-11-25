import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router) {
    this.router = router;
  }

  login() {
    if (this.loginForm.value.username == 'user' && this.loginForm.value.password == 'easypass') {
      localStorage.setItem('user', JSON.stringify({username: this.loginForm.value.username}));
      this.router.navigate(['logged-in']);
    } else {
      alert("Wrong username or password!");
    }
  }
}
