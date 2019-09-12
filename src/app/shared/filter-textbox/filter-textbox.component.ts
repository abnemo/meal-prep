import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mp-filter-textbox',
  templateUrl: './filter-textbox.component.html',
  styleUrls: ['./filter-textbox.component.scss']
})
export class FilterTextboxComponent {

  searchTerm: string;
  @Output() searchFilter = new EventEmitter<string>();

  constructor() { }

  search() {
    const term = this.searchTerm;
    this.searchFilter.emit(term);
  }
}
