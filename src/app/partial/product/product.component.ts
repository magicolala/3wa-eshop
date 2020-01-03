import {Component, Input, OnChanges} from '@angular/core';
import {Category} from '../../../Model/Category.class';
import {ShopService} from '../../shop.service';
import {Product} from '../../../Model/Product.class';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges {
  @Input() category: Category;
  products: Product[];
  constructor(private shopService: ShopService) { }

  ngOnChanges() {
    this.products = this.shopService.getProductsByCategory(this.category.id);
    console.log(this.category);
  }

}
