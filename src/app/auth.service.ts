import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private route: Router) {}

  public user = new BehaviorSubject<any>(null);
  public isSignin = new BehaviorSubject<boolean>(true);

  handleAuth(userData: any) {
    this.user.next(userData);
  }

  handleSigninDisplay(isSign: boolean) {
    this.isSignin.next(isSign);
  }

  // logout() {
  //   this.route.navigate(['/login']);
  // }
}
