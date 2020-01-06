import {Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShopService} from '../shop.service';
import {Product} from '../../Model/Product.class';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements DoCheck {
  products: Product[];
  smallText: string;

  constructor(private route: ActivatedRoute, private shopService: ShopService) { }

  ngDoCheck() {
    const search = this.route.snapshot.paramMap.get('search');
    this.products = this.shopService.getProductsBySearch(search);
    this.smallText = search;
  }

}
