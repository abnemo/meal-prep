import { Component, OnInit } from '@angular/core';
import { AuthService } from 'auth/shared/services/auth/auth.service'

@Component({
  selector: 'app-household',
  templateUrl: './household.component.html',
  styleUrls: ['./household.component.scss']
})
export class HouseholdComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  user: any;

  ngOnInit() {
    this.user = this.authService.payload().email
  }

}
