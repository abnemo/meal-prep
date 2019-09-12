import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group(
    { email: ['', Validators.email], password: ['', Validators.required] });

  constructor(
    private authService: AuthService, private router: Router,
    private fb: FormBuilder) { }

  onSubmit(form: FormGroup) {
    this.authService.login(form.value)
      .subscribe(res => this.router.navigate(['/']), err => console.log(err));
  }

  get passwordInvalid() {
    const control = this.loginForm.get('password');
    return control!.hasError('required') && control!.touched;
  }

  get emailFormat() {
    const control = this.loginForm.get('email');
    return control!.hasError('email') && control!.touched;
  }
}
