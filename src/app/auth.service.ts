import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  constructor() {}

  public user = new BehaviorSubject<any>(null);
  public isSignin = new BehaviorSubject<boolean>(true);

  handleAuth(userData: any) {
    this.user.next(userData);
  }

  handleSigninDisplay(isSign: boolean) {
    this.isSignin.next(isSign);
  }
}
