import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private authser: AuthService, private route: Router) {}

  ngOnInit() {}

  logout() {
    // this.authser.logout();
    this.route.navigate(['/login']);
  }
}
