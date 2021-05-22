import { Component, HostListener, OnInit } from '@angular/core';
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

  allowDrop(event: any) {
    event.preventDefault();
  }

  drop(event: DragEvent) {
    console.log(event);
  }

  @HostListener('click', ['$event.target'])
  onClick() {
    console.log('selected');
  }
}
