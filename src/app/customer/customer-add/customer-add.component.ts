import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { Store } from '@ngrx/store';
import { CustomerState } from '../store/reducer/customer.reducer';
import { addCustomers } from '../store/action/customer.actions';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.scss'
})
export class CustomerAddComponent implements OnInit {

  constructor(private store: Store<CustomerState>) { }

  ngOnInit(): void {
    
  }

  addCustomer(customerName: string) {
    const customer = new Customer();
    customer.name = customerName;
    this.store.dispatch(addCustomers(customer))
  }

}
