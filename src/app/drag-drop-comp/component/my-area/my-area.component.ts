import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output
} from '@angular/core';
import { LayoutCore } from '../../my-control-layout.base.component';
import { IDragData } from './../../models/layout-control';

@Component({
  selector: 'app-my-area',
  templateUrl: './my-area.component.html',
  styleUrls: ['./my-area.component.css']
})
export class MyAreaComponent extends LayoutCore implements OnInit {
  @Output() onClick = new EventEmitter<string>();
  value: string;
  constructor() {
    super();
  }
  ngOnInit(): void {}

  allowDrop(event: any) {
    event.preventDefault();
  }

  drop(event: DragEvent) {
    if (!event.dataTransfer?.getData('data')) {
      return;
    }
    const dragData: IDragData = JSON.parse(
      event.dataTransfer?.getData('data') || ''
    ) as IDragData;
    if (dragData.type == 'param') {
      this.paramRef = dragData.valueName || '';
      console.log(this.paramRef);
    }
  }

  @HostListener('click', ['$event.target'])
  handleOnClick() {
    // console.log('selected');
    // this.onClick.emit('Text Area click');
  }
}
