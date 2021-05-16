import { Component, OnInit } from '@angular/core';
import { LayoutCore } from '../../my-control-layout.base.component';

@Component({
  selector: 'app-my-area',
  templateUrl: './my-area.component.html',
  styleUrls: ['./my-area.component.css']
})
export class MyAreaComponent extends LayoutCore implements OnInit {
  value: string;
  constructor() {
    super();
  }
  ngOnInit(): void {}
}
