import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

enum Fields {
  EMAIL = 'email',
  PASSWORD = 'password',
}

type Errors = {
  [key in Fields]: string;
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup
  private validationMessages = {
    email: {
      required: 'Email is required.',
      email: 'Email is invalid.'
    },
    password: {
      required: 'Password is required.',
      minlength: 'Password must be at least 6 characters.'
    },
  };

  error: Errors = {
    email: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });

    const emailControl = this.loginForm.get('email');
    emailControl.valueChanges.subscribe(() => this.notify(emailControl, Fields.EMAIL));

    const passwordControl = this.loginForm.get('password');
    passwordControl.valueChanges.subscribe(() => this.notify(passwordControl, Fields.PASSWORD));
  }

  onSubmit(form: FormGroup) {
    this.authService.login(form.value)
      .subscribe(res => this.router.navigate(['/']), err => console.log(err));
  }

  notify(c: AbstractControl, field: string): void {
    this.error[field] = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.error[field] = Object.keys(c.errors)
        .map(key => this.validationMessages[field][key]);
    }
  }
}
