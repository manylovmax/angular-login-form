import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoggedInPageComponent } from './logged-in-page/logged-in-page.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'logged-in',   component: LoggedInPageComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginPageComponent},
    { path: '**',   redirectTo: '/login'}
];
