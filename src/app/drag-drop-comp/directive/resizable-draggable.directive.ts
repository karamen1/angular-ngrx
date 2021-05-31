import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResizableDraggable]'
})
export class ResizableDraggableDirective {
  private dragStartMouseClick: {
    x: number;
    y: number;
    top: number;
    left: number;
  } = { x: 0, y: 0, top: 0, left: 0 };

  private parentPosition: {
    top: number;
    left: number;
  } = { top: 0, left: 0 };

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.createDivWrapper();
  }

  private createDivWrapper() {
    this.renderer.setAttribute(this.el.nativeElement, 'draggable', 'true');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'move');
    this.renderer.listen(this.el.nativeElement, 'dragend', (e) =>
      this.dragEndElement(e)
    );
    this.renderer.listen(this.el.nativeElement, 'dragstart', (e) =>
      this.dragStartElement(e)
    );
  }

  private dragStartElement($event: DragEvent) {
    const {
      top,
      left
    } = this.el.nativeElement?.offsetParent?.getBoundingClientRect();
    this.parentPosition.top = top;
    this.parentPosition.left = left;

    this.dragStartMouseClick.x = $event.clientX - this.parentPosition.left;
    this.dragStartMouseClick.y = $event.clientY - this.parentPosition.top;
    const boundingRect = this.el.nativeElement?.getBoundingClientRect();
    this.dragStartMouseClick.top = boundingRect.top - this.parentPosition.top;
    this.dragStartMouseClick.left =
      boundingRect.left - this.parentPosition.left;
  }

  private dragEndElement($event: DragEvent) {
    const newLeft =
      this.dragStartMouseClick.left +
      ($event.clientX - this.parentPosition.left - this.dragStartMouseClick?.x);
    const newTop =
      this.dragStartMouseClick.top +
      ($event.clientY - this.parentPosition.top - this.dragStartMouseClick?.y);

    this.renderer.setStyle(this.el.nativeElement, 'left', newLeft + 'px');
    this.renderer.setStyle(this.el.nativeElement, 'top', newTop + 'px');
  }
}
