import {Component, DoCheck, OnInit} from '@angular/core';
import {ShopService} from '../shop.service';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../Model/Category.class';
import {Product} from '../../Model/Product.class';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit, DoCheck {
  category: Category;
  products: Product[];
  page = 1;
  pageSize = 4;
  collectionSize = 0;

  constructor(private shopService: ShopService, private route: ActivatedRoute) { }

  ngDoCheck() {
    const id = this.route.snapshot.paramMap.get('id');
    this.category = this.shopService.getCategory(id);
    this.products = this.shopService.getProductsByCategory(id);

    this.collectionSize = this.products.length;
  }
  ngOnInit() {

  }

}
