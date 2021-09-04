import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(value: any, args?: any) {
    const resultFilter = [];
    for (let country of value) {
      country.name = country.name.toLowerCase();
      if (country.name.indexOf(args) > -1) {
        resultFilter.push(country);
      }
    }
    return resultFilter
  }

}
