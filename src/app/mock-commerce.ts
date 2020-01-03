import {Category} from '../Model/Category.class';
import {Product} from '../Model/Product.class';
import {Image} from '../Model/Image.class';

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'Pulls'
  },
  {
    id: 2,
    name: 'Manteaux'
  },
  {
    id: 3,
    name: 'Pantalons'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Veste en maille',
    description: 'Beige Chiné',
    price: 69.99,
    promoPrice: 35,
    image: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwc9cfeba8/images/707461_7240_V1.jpg?sw=1562&sh=1800',
    categoryId: 1
  },
  {
    id: 2,
    title: 'Pull col châle en jacquard',
    description: 'Bordeau',
    price: 39.99,
    promoPrice: 0,
    image: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw01bc64e2/images/716053_5200_V1.jpg?sw=1562&sh=1800',
    categoryId: 1
  },
  {
    id: 3,
    title: 'Pull col rond color block',
    description: 'Jaune',
    price: 35.99,
    promoPrice: 25.19,
    image: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw5df51628/images/720194_3200_V1.jpg?sw=1562&sh=1800',
    categoryId: 1
  },
  {
    id: 4,
    title: 'Pull jacquard allover',
    description: 'Bleu Marine',
    price: 39.99,
    promoPrice: 31.99,
    image: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwdea7905d/images/712414_1400_V1.jpg?sw=1562&sh=1800',
    categoryId: 1
  },
  {
    id: 5,
    title: 'Manteau 3 4 col tailleur',
    description: 'Gris Carreaux',
    price: 129.99,
    promoPrice: 99.99,
    image: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwa1e8e0a8/images/719619_8070_V1.jpg?sw=1562&sh=1800',
    categoryId: 2
  },
  {
    id: 6,
    title: 'Manteau long style duffle coat',
    description: 'Bleu Marine',
    price: 149.99,
    promoPrice: 104.99,
    image: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwfb8d8012/images/718841_1400_V1.jpg?sw=1562&sh=1800',
    categoryId: 2
  },
  {
    id: 7,
    title: 'Manteau long zippé doublure amovible',
    description: 'Bleu Marine',
    price: 169.99,
    promoPrice: 0,
    image: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwe1b5c540/images/718840_8200_V1.jpg?sw=1562&sh=1800',
    categoryId: 2
  },
  {
    id: 8,
    title: 'Manteau long double col montant',
    description: 'Noir',
    price: 189.99,
    promoPrice: 151.99,
    image: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw81cd4a25/images/707543_9020_V1.jpg?sw=1562&sh=1800',
    categoryId: 2
  },
  {
    id: 9,
    title: 'Pantalon de costume slim',
    description: 'Bleu Marine',
    price: 69.99,
    promoPrice: 0,
    image: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw24fe7cc4/images/712324_1400_V1.jpg?sw=1562&sh=1800',
    categoryId: 3
  },
  {
    id: 10,
    title: 'Chino Slim bande coté',
    description: 'Gris',
    price: 39.99,
    promoPrice: 31.99,
    image: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw24fe7cc4/images/712324_1400_V1.jpg?sw=1562&sh=1800',
    categoryId: 3
  },
  {
    id: 11,
    title: 'Gilet zippé col montant',
    description: 'Bordeau',
    price: 49.99,
    promoPrice: 25,
    image: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw34844a47/images/718088_5200_V1.jpg?sw=1562&sh=1800',
    categoryId: 1
  },
  {
    id: 12,
    title: 'Pull col montant zippé uni maille piquée',
    description: 'Bleu Marine',
    price: 39.99,
    promoPrice: 31.99,
    image: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw01ecbe9e/images/720153_1400_V1.jpg?sw=1562&sh=1800',
    categoryId: 1
  },
  {
    id: 13,
    title: 'PULL COL CHÂLE COLOR BLOC',
    description: 'Ecru Fantaisie',
    price: 39.99,
    promoPrice: 27.99,
    image: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw918af0a3/images/719264_7080_V1.jpg?sw=1562&sh=1800',
    categoryId: 1
  }
];

export const IMAGES: Image[] = [
  {
    id: 1,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwc9cfeba8/images/707461_7240_V1.jpg?sw=1562&sh=1800',
    productId: 1
  },
  {
    id: 2,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw47a523bd/images/707461_7240_V3.jpg?sw=1562&sh=1800',
    productId: 1
  },
  {
    id: 3,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw8565ff25/images/707461_7240_V4.jpg?sw=1562&sh=1800',
    productId: 1
  },
  {
    id: 4,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw05ac63db/images/707461_7240_V9.jpg?sw=1562&sh=1800',
    productId: 1
  },
  {
    id: 5,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw01bc64e2/images/716053_5200_V1.jpg?sw=1562&sh=1800',
    productId: 2
  },
  {
    id: 6,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw7b8c3ca5/images/716053_5200_V3.jpg?sw=1562&sh=1800',
    productId: 2
  },
  {
    id: 7,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwb0960d44/images/716053_5200_V2.jpg?sw=1562&sh=1800',
    productId: 2
  },
  {
    id: 8,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw119af9f2/images/716053_5200_V4.jpg?sw=1562&sh=1800',
    productId: 2
  },
  {
    id: 9,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw5df51628/images/720194_3200_V1.jpg?sw=1562&sh=1800',
    productId: 3
  },
  {
    id: 10,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw5372d3fd/images/720194_3200_V2.jpg?sw=1562&sh=1800',
    productId: 3
  },
  {
    id: 11,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw2b7265b6/images/720194_3200_V4.jpg?sw=1562&sh=1800',
    productId: 3
  },
  {
    id: 12,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw302d2e22/images/720194_3200_V5.jpg?sw=1562&sh=1800',
    productId: 3
  },
  {
    id: 13,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwdea7905d/images/712414_1400_V1.jpg?sw=1562&sh=1800',
    productId: 4
  },
  {
    id: 14,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwd4c563d6/images/712414_1400_V3.jpg?sw=1562&sh=1800',
    productId: 4
  },
  {
    id: 15,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw9431ead1/images/712414_1400_V2.jpg?sw=1562&sh=1800',
    productId: 4
  },
  {
    id: 16,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw1568eab6/images/712414_1400_V4.jpg?sw=1562&sh=1800',
    productId: 4
  },
  {
    id: 17,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwa1e8e0a8/images/719619_8070_V1.jpg?sw=1562&sh=1800',
    productId: 5
  },
  {
    id: 18,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwf316ffbf/images/719619_8070_V3.jpg?sw=1562&sh=1800',
    productId: 5
  },
  {
    id: 19,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwd3f461bf/images/719619_8070_V2.jpg?sw=1562&sh=1800',
    productId: 5
  },
  {
    id: 20,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwac657e23/images/719619_8070_V4.jpg?sw=1562&sh=1800',
    productId: 5
  },
  {
    id: 21,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwfb8d8012/images/718841_1400_V1.jpg?sw=1562&sh=1800',
    productId: 6
  },
  {
    id: 22,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw79ff57c1/images/718841_1400_V3.jpg?sw=1562&sh=1800',
    productId: 6
  },
  {
    id: 23,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw5dbfefc6/images/718841_1400_V2.jpg?sw=1562&sh=1800',
    productId: 6
  },
  {
    id: 24,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw359eef98/images/718841_1400_V4.jpg?sw=1562&sh=1800',
    productId: 6
  },
  {
    id: 25,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwe1b5c540/images/718840_8200_V1.jpg?sw=1562&sh=1800',
    productId: 7
  },
  {
    id: 26,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwa9fe80ef/images/718840_8200_V3.jpg?sw=1562&sh=1800',
    productId: 7
  },
  {
    id: 27,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw18e65e7b/images/718840_8200_V2.jpg?sw=1562&sh=1800',
    productId: 7
  },
  {
    id: 28,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw5ea857f3/images/718840_8200_V4.jpg?sw=1562&sh=1800',
    productId: 7
  },
  {
    id: 29,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw81cd4a25/images/707543_9020_V1.jpg?sw=1562&sh=1800',
    productId: 8
  },
  {
    id: 30,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw7de31158/images/707543_9020_V3.jpg?sw=1562&sh=1800',
    productId: 8
  },
  {
    id: 31,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw075d02f7/images/707543_9020_V2.jpg?sw=1562&sh=1800',
    productId: 8
  },
  {
    id: 32,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwfabe62b2/images/707543_9020_V4.jpg?sw=1562&sh=1800',
    productId: 8
  },
  {
    id: 33,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw24fe7cc4/images/712324_1400_V1.jpg?sw=1562&sh=1800',
    productId: 9
  },
  {
    id: 34,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw2181c4d2/images/712324_1400_V3.jpg?sw=1562&sh=1800',
    productId: 9
  },
  {
    id: 35,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw1939d77c/images/712324_1400_V2.jpg?sw=1562&sh=1800',
    productId: 9
  },
  {
    id: 36,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwb41f4c1e/images/712324_1400_V4.jpg?sw=1562&sh=1800',
    productId: 9
  },
  {
    id: 37,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw5f533e44/images/716650_8000_V1.jpg?sw=1562&sh=1800',
    productId: 10
  },
  {
    id: 38,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dw1e1cbd45/images/716650_8000_V3.jpg?sw=1562&sh=1800',
    productId: 10
  },
  {
    id: 39,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwb3167c74/images/716650_8000_V2.jpg?sw=1562&sh=1800',
    productId: 10
  },
  {
    id: 40,
    imageUrl: 'https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwbe13bfc5/images/716650_8000_V5.jpg?sw=1562&sh=1800',
    productId: 10
  }
];

export const TAILLES = [
  {
    id: 1,
    productId: 1,
    name: 'S',
    stock: 12
  },
  {
    id: 2,
    productId: 1,
    name: 'M',
    stock: 11
  },
  {
    id: 3,
    productId: 1,
    name: 'L',
    stock: 11
  },
  {
    id: 4,
    productId: 2,
    name: 'S',
    stock: 12
  },
  {
    id: 5,
    productId: 2,
    name: 'M',
    stock: 11
  },
  {
    id: 6,
    productId: 2,
    name: 'L',
    stock: 11
  },
  {
    id: 7,
    productId: 3,
    name: 'S',
    stock: 12
  },
  {
    id: 8,
    productId: 3,
    name: 'M',
    stock: 11
  },
  {
    id: 9,
    productId: 3,
    name: 'L',
    stock: 11
  },
  {
    id: 10,
    productId: 4,
    name: 'S',
    stock: 8
  },
  {
    id: 11,
    productId: 4,
    name: 'M',
    stock: 4
  },
  {
    id: 11,
    productId: 4,
    name: 'L',
    stock: 3
  },
  {
    id: 12,
    productId: 5,
    name: 'S',
    stock: 11
  },
  {
    id: 13,
    productId: 5,
    name: 'M',
    stock: 11
  },
  {
    id: 14,
    productId: 5,
    name: 'L',
    stock: 10
  },
  {
    id: 15,
    productId: 6,
    name: 'S',
    stock: 11
  },
  {
    id: 16,
    productId: 6,
    name: 'M',
    stock: 11
  },
  {
    id: 17,
    productId: 6,
    name: 'L',
    stock: 11
  },
  {
    id: 18,
    productId: 7,
    name: 'S',
    stock: 11
  },
  {
    id: 19,
    productId: 7,
    name: 'M',
    stock: 11
  },
  {
    id: 20,
    productId: 7,
    name: 'L',
    stock: 11
  },
  {
    id: 21,
    productId: 8,
    name: 'S',
    stock: 11
  },
  {
    id: 22,
    productId: 8,
    name: 'M',
    stock: 11
  },
  {
    id: 23,
    productId: 8,
    name: 'L',
    stock: 11
  },
  {
    id: 24,
    productId: 9,
    name: 'S',
    stock: 8
  },
  {
    id: 25,
    productId: 9,
    name: 'M',
    stock: 11
  },
  {
    id: 26,
    productId: 9,
    name: 'L',
    stock: 11
  },
  {
    id: 27,
    productId: 10,
    name: 'S',
    stock: 11
  },
  {
    id: 28,
    productId: 10,
    name: 'M',
    stock: 11
  },
  {
    id: 29,
    productId: 10,
    name: 'L',
    stock: 11
  }
];
