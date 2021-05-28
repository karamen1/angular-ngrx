import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResizableDraggable]'
})
export class ResizableDraggableDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'backgroundColor', 'red');
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {}
}
