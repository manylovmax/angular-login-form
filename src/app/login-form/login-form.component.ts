import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  username = '';
  password = '';

  constructor(private router: Router) {
    this.router = router;
  }

  login() {
    if (this.username == 'user' && this.password == 'easypass') {
      localStorage.setItem('user', JSON.stringify({username: this.username, password: this.password}));
      this.router.navigate(['logged-in']);
    } else {
      alert("Wrong username or password!");
    }
  }
}
