import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropDemoRoutingModule } from './drag-drop-demo-routing.module';
import { CounterInputComponent } from './component/counter-input/counter-input.component';
import { DrapDropDemoComponent } from './component/drap-drop-demo/drap-drop-demo.component';


@NgModule({
  declarations: [
    CounterInputComponent,
    DrapDropDemoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    DragDropDemoRoutingModule
  ]
})
export class DragDropDemoModule { }
