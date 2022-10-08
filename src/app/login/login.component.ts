import { Component, OnInit } from '@angular/core';
import { formControl } from '@angular/core/schematics/migrations/typed-forms/util';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private authser: AuthService
  ) {}
  fromGrup!: FormGroup;
  ngOnInit() {
    this.fromGrup = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  onFormSubmit() {
    if (this.fromGrup.valid) {
      const isSignin = false;
      this.authser.handleSigninDisplay(isSignin);
      // console.log(this.fromGrup.value);
      this.route.navigate(['/dashboard']);
    }
  }
}
