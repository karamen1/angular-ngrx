import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { PetComponent, PetListComponent } from './component';
import { EffectsModule } from '@ngrx/effects';
import { PetEffects } from './store/effects/pet.effects';
import { StoreModule } from '@ngrx/store';
import * as petStore from './store/reducers/pet.reducer';

@NgModule({
  declarations: [PetListComponent, PetComponent],
  imports: [
    CommonModule,
    PetRoutingModule,
    StoreModule.forFeature(petStore.petFeatureKey, petStore.reducer),
    EffectsModule.forFeature([PetEffects])
  ]
})
export class PetModule {}
