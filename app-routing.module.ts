import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AuthGuard } from './src/app/auth.guard';
import { DasboardContentComponent } from './src/app/dashboard/dasboard-content/dasboard-content.component';
import { DashboardComponent } from './src/app/dashboard/dashboard.component';
import { LoginComponent } from './src/app/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent, canActivate: [!AuthGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [{ path: 'dash-content', component: DasboardContentComponent }],
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
