import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer';
import { selectCustomers } from '../store/selector/customer.selectors';
import { CommonModule } from '@angular/common';
import { deleteCustomers } from '../store/action/customer.actions';

@Component({
  selector: 'app-customer-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-view.component.html',
  styleUrl: './customer-view.component.scss'
})
export class CustomerViewComponent implements OnInit {

  customers$!: Observable<Customer[]>;

  constructor(private store: Store) {
    this.customers$ = this.store.pipe(select(selectCustomers))
  }

  ngOnInit(): void {
   
  }

  deleteCustomer(customerName: string) {
    this.store.dispatch(deleteCustomers({ customerName }));
  };

}
