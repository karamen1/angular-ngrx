import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './view/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule],
  exports: [LoginComponent]
})
export class SessionModule {}
