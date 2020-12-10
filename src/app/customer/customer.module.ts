import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { customerFeatureKey, reducer } from './store/reducer/customer.reducer';
import { CustomerViewComponent } from './view/customer-view/customer-view.component';
import { CustomerAddComponent } from './view/customer-add/customer-add.component';

@NgModule({
  declarations: [CustomerViewComponent, CustomerAddComponent],
  imports: [CommonModule, StoreModule.forFeature(customerFeatureKey, reducer)],
  exports: [CustomerViewComponent, CustomerAddComponent]
})
export class CustomerModule {}
