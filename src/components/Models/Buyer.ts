import type { TPayment, IBuyer, ValidationErrors } from '../../types';

export class Buyer {
  private payment: TPayment | '' = '';
  private email: string = '';
  private phone: string = '';
  private address: string = '';

  setPayment(value: TPayment): void {
    this.payment = value;
  }

  setEmail(value: string): void {
    this.email = value;
  }

  setPhone(value: string): void {
    this.phone = value;
  }

  setAddress(value: string): void {
    this.address = value;
  }

  getBuyerData(): IBuyer {
    return {
      payment: this.payment,
      email: this.email,
      phone: this.phone,
      address: this.address
    };
  }

  clearBuyer(): void {
    this.payment = '';
    this.email = '';
    this.phone = '';
    this.address = '';
  }

  validateBuyer(): ValidationErrors {
    const errors: ValidationErrors = {};

    if (!this.payment) {
      errors.payment = 'Выберите способ оплаты';
    }

    if (!this.email) {
      errors.email = 'Укажите email';
    }

    if (!this.phone) {
      errors.phone = 'Укажите телефон';
    }

    if (!this.address) {
      errors.address = 'Укажите адрес';
    }

    return errors;
  }
}
