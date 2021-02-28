import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetComponent, PetListComponent } from './component';
const routes: Routes = [
  {
    path: 'pets',
    component: PetListComponent
  },
  {
    path: 'pets/:id',
    component: PetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule {}
