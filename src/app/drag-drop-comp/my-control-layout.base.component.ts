import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { ILayout } from './models/layout-control';

@Directive()
export abstract class LayoutCore implements OnInit, OnDestroy {
  @Input('layout') set layout(pos: ILayout) {
    if (pos) {
      this.positionStyle = {
        top: `${pos.top}px`,
        left: `${pos.left}px`,
        width: pos.width ? `${pos.width}px` : 'fit-content',
        height: `${pos.height}px`,
        position: 'absolute'
      };
    }
  }

  public getLayout() {
    return this.positionStyle || {};
  }
  public getParam() {
    return this.paramRef;
  }

  paramRef: string;

  @Input() editable = false;
  positionStyle: any;
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
