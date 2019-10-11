import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

enum Fields {
  EMAIL = 'email',
  PASSWORD = 'password',
  NAME = 'name'
}

type Errors = {
  [key in Fields]: string;
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  private validationMessages = {
    email: {
      required: 'Email is required.',
      email: 'Email is invalid.'
    },
    password: {
      required: 'Password is required.',
      minlength: 'Password must be at least 6 characters.'
    },
    name: {
      required: "Household name is required."
    }
  };

  error: Errors = {
    email: '',
    password: '',
    name: ''
  };

  constructor(
    private authService: AuthService, private router: Router,
    public authHttp: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      householdName: ['', Validators.required]
    });
    const emailControl = this.registerForm.get('email');
    emailControl.valueChanges.subscribe(() => this.notify(emailControl, Fields.EMAIL));

    const passwordControl = this.registerForm.get('password');
    passwordControl.valueChanges.subscribe(() => this.notify(passwordControl, Fields.PASSWORD));

    const householdNameControl = this.registerForm.get('householdName');
    householdNameControl.valueChanges.subscribe(() => this.notify(householdNameControl, Fields.NAME));
  }

  onSubmit(form: FormGroup) {
    this.authService.register(form.value)
      .subscribe(
        result => this.router.navigate(['/']), err => console.log(err));
  }

  notify(c: AbstractControl, field: string): void {
    this.error[field] = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.error[field] = Object.keys(c.errors)
        .map(key => this.validationMessages[field][key]);
    }
  }
}
