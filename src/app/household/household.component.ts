import { Component, OnInit } from '@angular/core';
import { HouseholdService, HouseholdResponse } from './household.service';


@Component({
  selector: 'app-household',
  templateUrl: './household.component.html',
  styleUrls: ['./household.component.scss']
})
export class HouseholdComponent implements OnInit {
  result: HouseholdResponse;
  constructor(
    private householdService: HouseholdService
  ) { }

  ngOnInit() {
    this.householdService.getHousehold().subscribe(val => this.result = val)
  }

  removeUser(id: string) {
    this.householdService.removeUser(id).subscribe(val => console.log(val))
  }

}

