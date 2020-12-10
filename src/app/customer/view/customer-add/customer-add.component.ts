import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from '../../model/customer';
import { addCustomer } from '../../store/action/customer.actions';
import { CustomerState } from '../../store/reducer/customer.reducer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  constructor(private store: Store<CustomerState>) {}

  onAddCustomer(name: string): void {
    const newCus = new Customer();
    newCus.name = 'Anh chang dep trai' + name;

    this.store.dispatch(addCustomer(newCus));
  }

  ngOnInit(): void {}
}
