import { Component, OnInit } from '@angular/core';
import {ShopService} from '../shop.service';
import {Category} from '../../Model/Category.class';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  categories: Category[];
  constructor(private shopService: ShopService, private router: Router) { }

  ngOnInit() {
    this.categories = this.shopService.getCategories();
  }

  onSubmit(form: NgForm): void {
    // this.searchPosts.emit(form.value.word);
    this.router.navigate(['/search', form.value.word]);
  }
}
