import { Component, OnInit } from '@angular/core';
import {ShopService} from '../shop.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../Model/Product.class';
import {Image} from '../../Model/Image.class';
import * as $ from 'jquery';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  product: Product;
  images: Image[];
  tails;
  similarProducts: Product[];
  constructor(private shopService: ShopService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.shopService.getProduct(id);
    this.images = this.shopService.getImagesByProduct(id);
    this.tails = this.shopService.getTailsByProduct(id);
    const idCat = this.product.categoryId;
    this.similarProducts = this.shopService.getProductsByCategory(idCat);
  }

}
