import { createReducer, on } from '@ngrx/store';
import { Customer } from '../../../models/customer';
import * as CustomerActions from '../action/customer.actions';

export const customerFeatureKey = 'customertest';

export interface CustomerState {
  customers: Customer[];
}

export const initialState: CustomerState = {
  customers: []
};

export const customerReducer = createReducer(
  initialState,
  on(CustomerActions.addCustomers, (state: CustomerState, { customer }) => (
    {
      ...state,
      customers: [...state.customers, customer]
    }
  )),
  on(CustomerActions.deleteCustomers, (state, { customerName }) => (
    {
      ...state,
      customers: state.customers.filter(customer => customer.name !== customerName),
    }))
);

