import {Component, OnInit} from '@angular/core';
import {Product} from '../../Model/Product.class';
import {ShopService} from '../shop.service';
import {Category} from '../../Model/Category.class';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  promoProducts: Product[];
  categories: Category[];
  products: Product[];

  constructor(private shopService: ShopService) {
  }

  ngOnInit() {
    const prods = this.shopService.getPromoProducts();
    this.promoProducts = this.shopService.getPercentageByProduct(prods);
    this.categories = this.shopService.getCategories();
    this.products = this.shopService.getProducts();
  }
}
