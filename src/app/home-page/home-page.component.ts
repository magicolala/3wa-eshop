import {Component, OnInit} from '@angular/core';
import {Product} from '../../Model/Product.class';
import {ShopService} from '../shop.service';
import {Category} from '../../Model/Category.class';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('changeBackground', [
      state('first', style({
        backgroundColor: 'yellow'
      })),
      state('end', style({
        backgroundColor: '#dc3545'
      })),
      transition('* => *', [
        animate('1s')
      ])
    ]),
    trigger('promoAnim', [
      state('first', style({
        marginLeft: '5px'
      })),
      state('end', style({
        marginLeft: '0px'
      })),
      transition('* => *', [
        animate('1s')
      ])
    ]),
  ],
})
export class HomePageComponent implements OnInit {
  promoProducts: Product[];
  categories: Category[];
  products: Product[];
  state = 'first';

  constructor(private shopService: ShopService) {
  }

  ngOnInit() {
    const prods = this.shopService.getPromoProducts();
    this.promoProducts = this.shopService.getPercentageByProduct(prods);
    this.categories = this.shopService.getCategories();
    this.products = this.shopService.getProducts();

    setInterval(() => {
      this.changeState();
    }, 1000);
  }

  changeState(): void {
    if (this.state === 'first') {
      this.state = 'end';
    } else {
      this.state = 'first';
    }
  }
}
