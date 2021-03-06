import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { CounterInputComponent } from './component/counter-input/counter-input.component';
import { DrapDropDemoComponent } from './component/drap-drop-demo/drap-drop-demo.component';
import { DynamicContent } from './component/dynamiccontent';
import { MyButtonComponent } from './component/my-button/my-button.component';
import { DragDropDemoRoutingModule } from './drag-drop-demo-routing.module';
import { MyAreaComponent } from './component/my-area/my-area.component';
import { MyLabelComponent } from './component/my-label/my-label.component';

@NgModule({
  declarations: [
    CounterInputComponent,
    DynamicContent,
    DrapDropDemoComponent,
    MyButtonComponent,
    MyAreaComponent,
    MyLabelComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatListModule,
    DragDropModule,
    DragDropDemoRoutingModule
  ]
})
export class DragDropDemoModule {}
