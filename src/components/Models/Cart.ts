import type { IProduct } from '../../types';

export class Cart {
  items: IProduct[] = [];

  getCartItems(): IProduct[] {
    return this.items;
  }

  addCartItem(item: IProduct): void {
    this.items.push(item);
  }

  deleteCartItem(item: IProduct): void {
    this.items = this.items.filter((i) => i.id !== item.id);
  }

  clearCart(): void {
    this.items = [];
  }

  getCartTotal(): number {
    return this.items.reduce((sum, item) => {
      sum += item.price ?? 0;
      return sum;
    }, 0);
  }

  getCartItemsCount(): number {
    return this.items.length;
  }

  getCartItemById(id: string): boolean {
    return this.items.some((item) => item.id === id);
  }
}
