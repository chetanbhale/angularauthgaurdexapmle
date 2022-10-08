import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  constructor() {}

  public user = new BehaviorSubject<any>(null);

  handleAuth(userData: any) {
    this.user.next(userData);
  }
}
