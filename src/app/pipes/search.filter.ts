import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter',
})
export class SearchFilter implements PipeTransform {
  transform(items: any[], filter: Object): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter((item) => item.name.indexOf(filter.) !== -1);
  }
}
