import { Component, OnInit } from '@angular/core';
import {ShopService} from '../shop.service';
import {Category} from '../../Model/Category.class';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  categories: Category[];
  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.categories = this.shopService.getCategories();
  }

}
