import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  products: any[] = [];
  product: any;

  constructor(private route: ActivatedRoute, private productService: ProductsService, private router: Router ){ }

  ngOnInit() {
    this.products = this.productService.products

    // RECUPERATION DE ID
    const produitId: string|null = this.route.snapshot.paramMap.get("id");  
  
    if(produitId){
      this.product = this.products.find((product) => product.id == produitId)
    } 
  }

  goproductList(){
    this.router.navigate(["/"]);
  }
}