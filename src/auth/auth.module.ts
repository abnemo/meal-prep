import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// third party modules
import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../app/material.module';

// shared modules
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  },
];

const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyCqMj1g3F1l9RzzwdWoOPUbdbPmFEocItw',
  authDomain: 'mealprep-e6a11.firebaseapp.com',
  databaseURL: 'https://mealprep-e6a11.firebaseio.com',
  projectId: 'mealprep-e6a11',
  storageBucket: 'mealprep-e6a11.appspot.com',
  messagingSenderId: '761855951143'
};


@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule,
    AngularFireDatabaseModule, SharedModule.forRoot(), MaterialModule
  ],
})

export class AuthModule {
}
