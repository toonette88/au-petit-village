import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-figure-card',
  templateUrl: './figure-card.component.html',
  styleUrl: './figure-card.component.scss'
})
export class FigureCardComponent {

  // APPEL DU TABLEAU DE FIGURINES
  products: any[] = [];
  constructor(private productsService: ProductsService) {} 
  
  ngOnInit(): void {
    this.products = this.productsService.products
  }

  // APPEL DES FILTRES
  searchText: string = '';
  sortByPrice: string= '';
  // productList: any[] = [];

}
