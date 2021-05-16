import { Component, Input, OnInit } from '@angular/core';
import { LayoutCore } from '../../my-control-layout.base.component';

@Component({
  selector: 'app-my-button',
  // eslint-disable-next-line quotes
  template: `<button
    cdkDrag
    [ngClass]="{ disabled: !editable }"
    [style]="positionStyle"
  >
    {{ label }}
  </button>`
})
export class MyButtonComponent extends LayoutCore implements OnInit {
  @Input() label = 'My Button';
  constructor() {
    super();
  }
  ngOnInit(): void {}
}
