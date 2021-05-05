import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicContent]'
})
export class DynamicContent {
	constructor(public viewContainerRef: ViewContainerRef) {}
}
