import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FooterComponent,
  HeaderComponent,
  Page404Component
} from './layout/index';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, Page404Component],
  imports: [CommonModule, MatIconModule, MatToolbarModule, MatCardModule],
  exports: [HeaderComponent, FooterComponent, Page404Component]
})
export class ShareModule {}
