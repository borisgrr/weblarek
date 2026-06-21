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

console.log('Каталог (локальные данные):', catalog.getItems());

console.log('Товар по ID:', catalog.getItemById('854cef69-976d-4c2a-a18c-2aa45046c390'));

const catalogItemTest = catalog.getItemById('854cef69-976d-4c2a-a18c-2aa45046c390');

if (catalogItemTest) {
  catalog.setSelectedItem(catalogItemTest);

  const cart = new Cart();

  cart.addCartItem(catalogItemTest);
  console.log('Корзина после добавления товара:', cart.getCartItems());

  cart.deleteCartItem(catalogItemTest);
  console.log('Корзина после удаления товара:', cart.getCartItems());

  cart.addCartItem(catalogItemTest);
  cart.addCartItem(catalogItemTest);

  console.log('Общая стоимость корзины:', cart.getCartTotal());
  console.log('Количество товаров в корзине:', cart.getCartItemsCount());

  console.log('Проверка товара в корзине:', cart.getCartItemById('854cef69-976d-4c2a-a18c-2aa45046c390'));

  cart.clearCart();
  console.log('Корзина после очистки:', cart.getCartItems());
}

const buyer = new Buyer();

buyer.setPayment('card');
buyer.setEmail('abc@yandex.ru');
buyer.setPhone('+79036589669');
buyer.setAddress('г.Москва ул. Спортивная д. 22');

console.log('Данные покупателя:', buyer.getBuyerData());

buyer.clearBuyer();

console.log('Покупатель после очистки:', buyer.getBuyerData());

console.log('Ошибки валидации покупателя:', buyer.validateBuyer());

const api = new Api(API_URL);
const webLarekApi = new WebLarekApi(api);

webLarekApi
  .getProducts()
  .then((products) => {
    catalog.setItems(products.items);
    console.log('Каталог (с сервера):', catalog.getItems());
  })
  .catch((err) => {
    console.error('Ошибка загрузки товаров:', err);
  });
