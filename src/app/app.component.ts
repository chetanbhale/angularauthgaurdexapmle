import { Component, OnInit, VERSION } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isSignIn!: boolean;
  constructor(private authser: AuthService) {}
  ngOnInit(): void {
    this.authser.isSignin.subscribe((res) => (this.isSignIn = res));
  }
}
