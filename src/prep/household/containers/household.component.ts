import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
@Component({
  selector: 'app-household',
  templateUrl: './household.component.html',
  styleUrls: ['./household.component.scss']
})
export class HouseholdComponent implements OnInit {
  result: any;

  constructor(
    private authHttp: HttpClient
  ) { }

  ngOnInit() {
    this.authHttp.get(`${ environment.API }/household`)
    .subscribe((res) => {
      this.result = res
      })
  }

  removeUser(id: string) {
    console.log('Stop trying to remove yourself! :D')
  }

}
