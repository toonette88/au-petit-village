import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})

export class SortByPricePipe implements PipeTransform {

  transform(products: any[], selectedSort: string): any[] {
    
    if (selectedSort === "price-croissant") {
      return products.sort((a: any, b: any) => a.prix - b.prix);
    }

    else if (selectedSort === "price-decroissant") {
      return products.sort((a: any, b: any) => b.prix - a.prix);
    }
    
    else {
      return products;
    }

  }

}