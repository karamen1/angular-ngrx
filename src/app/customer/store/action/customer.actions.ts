import { createAction, props } from '@ngrx/store';
import { Customer } from '../../model/customer';

export const addCustomer = createAction(
  '[Customer] Add Customers',
  (customer: Customer) => ({ customer })
);
