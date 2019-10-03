import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  objectKeys = Object.keys;
  branchList: any;

  registerForm = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required],
    householdName: ['', Validators.required]
  });

  constructor(
    private authService: AuthService, private router: Router,
    public authHttp: HttpClient, private fb: FormBuilder) { }

  ngOnInit() { }

  onSubmit(form: FormGroup) {
    this.authService.register(form.value)
      .subscribe(
        result => this.router.navigate(['/']), err => console.log(err));
  }

  get passwordInvalid() {
    const control = this.registerForm.get('password');
    return control!.hasError('required') && control!.touched;
  }

  get emailFormat() {
    const control = this.registerForm.get('email');
    return control!.hasError('email') && control!.touched;
  }
}