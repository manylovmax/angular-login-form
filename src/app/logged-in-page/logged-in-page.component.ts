import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-in-page',
  standalone: true,
  imports: [],
  templateUrl: './logged-in-page.component.html',
  styleUrl: './logged-in-page.component.scss'
})
export class LoggedInPageComponent {
  constructor(private router: Router) {
    this.router = router;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
