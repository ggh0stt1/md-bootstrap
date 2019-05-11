
import products from './productsListData';
import productsTemplate from '../templates/products-list.hbs';
import { prepareProducts } from './productsListHelpers';

var productElement = document.getElementById('products');

if (productElement) {
  productElement.innerHTML = productsTemplate({
    products: prepareProducts(products),
  });
}
