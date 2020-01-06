import {Injectable} from '@angular/core';
import {Category} from '../Model/Category.class';
import {CATEGORIES, PRODUCTS, IMAGES, TAILLES} from './mock-commerce';
import {Product} from '../Model/Product.class';
import {Image} from '../Model/Image.class';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  _categories: Category[] = CATEGORIES;
  _products: Product[] = PRODUCTS;
  _images: Image[] = IMAGES;
  _tails = TAILLES;

  constructor() {
  }

  getCategories() {
    return this._categories;
  }

  getCategory(id) {
    return this._categories.find(category =>
      category.id == id
    );
  }

  getProductsByCategory(idCat) {
    let products = this._products.filter(el => el.categoryId == idCat);
    return this.sortById(products);
  }

  getProducts() {
    return this._products;
  }

  getPromoProducts() {
    const products = this.getProducts();

    return products.filter(product =>
      product.promoPrice !== 0
    );
  }

  getPercentageByProduct(products): Product[] {
    const array = [];

    products.forEach(product => {
      product.percentage = Math.round(100 * ((product.price) - product.promoPrice) / product.price);
      array.push(product);
    });

    return array;
  }

  getProduct(id: string): Product {
    return this._products.find(el => el.id === parseInt(id, 10));
  }

  getImagesByProduct(id: string) {
    return this._images.filter(image => image.productId === parseInt(id, 10));
  }

  getTailsByProduct(id: string) {
    return this._tails.filter(taille => taille.productId === parseInt(id, 10));
  }

  private sortById(array) {
    return array.sort((a, b) => {
      return  b.id - a.id;
    });
  }

  getProductsBySearch(search: string) {
    const products = this.getProducts();

    return products.filter((el) => {
      return el.title.indexOf(search) !== -1;
    });
  }
}
