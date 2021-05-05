import { DynamicContent } from './component/dynamiccontent';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { DragDropDemoRoutingModule } from './drag-drop-demo-routing.module';
import { CounterInputComponent } from './component/counter-input/counter-input.component';
import { DrapDropDemoComponent } from './component/drap-drop-demo/drap-drop-demo.component';
import { MyButtonComponent } from './component/my-button/my-button.component';

@NgModule({
  declarations: [
    CounterInputComponent,
    DynamicContent,
    DrapDropDemoComponent,
    MyButtonComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatListModule,
    DragDropDemoRoutingModule
  ]
})
export class DragDropDemoModule {}
