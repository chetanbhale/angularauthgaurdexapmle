import { Component, OnInit } from '@angular/core';
import { formControl } from '@angular/core/schematics/migrations/typed-forms/util';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private route: Router) {}
  fromGrup!: FormGroup;
  ngOnInit() {
    this.fromGrup = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  onFormSubmit() {
    if (this.fromGrup.valid) {
      console.log(this.fromGrup.value);
      this.route.navigate(['/dashboard']);
    }
  }
}
