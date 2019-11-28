import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; };
    if (!searchText) { return items; };

    searchText = searchText.toLowerCase();
    return items.filter(item => {
      if (item.name) return item.name.toLowerCase().includes(searchText)
      if (item.title) return item.title.toLowerCase().includes(searchText)
    });
  }

}
