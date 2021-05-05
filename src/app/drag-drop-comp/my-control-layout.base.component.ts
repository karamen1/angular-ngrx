import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ILayout } from './models/layout-control';

@Directive()
export abstract class LayoutCore implements OnInit, OnDestroy {
  @Input() layout: ILayout;
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void { }

  ngOnDestroy(): void { }
}
