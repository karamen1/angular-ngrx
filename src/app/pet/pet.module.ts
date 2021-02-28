import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { PetComponent, PetListComponent } from './component';

@NgModule({
  declarations: [PetListComponent, PetComponent],
  imports: [CommonModule, PetRoutingModule]
})
export class PetModule {}
