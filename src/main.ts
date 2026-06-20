import './scss/styles.scss';
import { Catalog } from './components/Models/Catalog';
import { Cart } from './components/Models/Cart';
import { Buyer } from './components/Models/Buyer';
import { apiProducts } from './utils/data';
import { WebLarekApi } from './components/WebLarekApi';
import { Api } from './components/base/Api';
import { API_URL } from './utils/constants';

const catalog = new Catalog();

catalog.setItems(apiProducts.items);

console.log('Массив товаров из каталога:', catalog.getItems());

console.log('ID элемента: ', catalog.getItemById('854cef69-976d-4c2a-a18c-2aa45046c390'));

const catalogItemTest = catalog.getItemById('854cef69-976d-4c2a-a18c-2aa45046c390');

if (catalogItemTest) {
  catalog.setSelectedItem(catalogItemTest);

  const cart = new Cart();

  cart.addCartItem(catalogItemTest);
  console.log(cart.getCartItems());

  cart.deleteCartItem(catalogItemTest);
  console.log(cart.getCartItems());

  cart.addCartItem(catalogItemTest);
  cart.addCartItem(catalogItemTest);

  console.log(cart.getCartTotal());
  console.log(cart.getCartItemsCount());

  console.log(cart.getCartItemById('854cef69-976d-4c2a-a18c-2aa45046c390'));

  cart.clearCart();
  console.log(cart.getCartItems());
}

const buyer = new Buyer();

buyer.setPayment('card');

buyer.setEmail('abc@yandex.ru');

buyer.setPhone('+79036589669');

buyer.setAddress('г.Москва ул. Спортивная д. 22');

console.log(buyer.getBuyerData());

buyer.clearBuyer();

console.log(buyer.getBuyerData());

console.log(buyer.validateBuyer());

const api = new Api(API_URL);
const webLarekApi = new WebLarekApi(api);

const products = await webLarekApi.getProducts();
catalog.setItems(products.items);
console.log(catalog.getItems());
