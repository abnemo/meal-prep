import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponent {
  searchTerm: string;
  @Output() searchFilter = new EventEmitter<string>();

  constructor() { }

  search() {
    const term = this.searchTerm;
    this.searchFilter.emit(term);
  }
}
