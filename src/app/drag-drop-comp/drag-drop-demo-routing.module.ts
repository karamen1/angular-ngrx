import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrapDropDemoComponent } from './component/drap-drop-demo/drap-drop-demo.component';

const routes: Routes = [
  {
    path: 'drap-drop-comp-demo',
    component: DrapDropDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragDropDemoRoutingModule {}
