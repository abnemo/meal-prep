import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'auth/shared/services/auth/auth.service';
import { environment } from 'environments/environment';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  objectKeys = Object.keys;
  branchList: any;

  registerForm = this.fb.group({
    surname: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required],
    branch: ['', Validators.required]
  });

  constructor(
    private authService: AuthService, private router: Router,
    public authHttp: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.authHttp.get(`${environment.API}/v1/branch`).subscribe(val => {
      this.branchList = val;
      for (const key of Object.keys(this.branchList)) {
        const hostList = window.location.hostname.split('.');
        if (hostList[0] === key.toLowerCase()) {
          this.registerForm.patchValue({ branch: key });
        }
      }
    });
  }

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
