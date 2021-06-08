import {
  Directive,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2
} from '@angular/core';
import { ILayout } from './../models/layout-control';

@Directive({
  selector: '[appResizableDraggable]'
})
export class ResizableDraggableDirective {
  @Output()
  onResizedOrDragEnd: EventEmitter<ILayout> = new EventEmitter<ILayout>();
  mode = 0; // 0 resize

  private resizeStartMouseClick: {
    width: number;
    height: number;
    top: number;
    left: number;
    x: number;
    y: number;
  } = { width: 0, height: 0, top: 0, left: 0, x: 0, y: 0 };

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
    // Div for Drag
    this.renderer.setAttribute(this.el.nativeElement, 'draggable', 'true');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'move');
    this.renderer.listen(this.el.nativeElement, 'dragend', (e) =>
      this.dragEndElement(e)
    );
    this.renderer.listen(this.el.nativeElement, 'dragstart', (e) =>
      this.dragStartElement(e)
    );

    // Create div for resize
    const southEast = this.renderer.createElement('div');
    this.renderer.setStyle(southEast, 'height', '10px');
    this.renderer.setStyle(southEast, 'width', '10px');
    this.renderer.setStyle(southEast, 'position', 'absolute');
    this.renderer.setStyle(southEast, 'bottom', 0);
    this.renderer.setStyle(southEast, 'right', 0);
    this.renderer.setStyle(southEast, 'background-color', 'red');
    this.renderer.setStyle(southEast, 'cursor', 'nw-resize');
    this.renderer.setStyle(southEast, 'z-index', 10);
    this.renderer.appendChild(this.el.nativeElement, southEast);
    this.renderer.listen(southEast, 'mousemove', (e) => this.resizeBox(e));
    this.renderer.listen(southEast, 'mousedown', (e) => {
      this.mousedown(e);
    });
    this.renderer.listen(southEast, 'mouseup', (e) => {
      console.log('mouse up');
      this.mode = 0;
    });

    const westNorth = this.renderer.createElement('div');
    this.renderer.setStyle(westNorth, 'height', '5px');
    this.renderer.setStyle(westNorth, 'width', '5px');
    this.renderer.setStyle(westNorth, 'position', 'absolute');
    this.renderer.setStyle(westNorth, 'top', 0);
    this.renderer.setStyle(westNorth, 'left', 0);
    this.renderer.setStyle(westNorth, 'background-color', 'red');
    this.renderer.setStyle(westNorth, 'cursor', 'nw-resize');
    this.renderer.setStyle(westNorth, 'z-index', 10);
    this.renderer.appendChild(this.el.nativeElement, westNorth);
  }

  private mousedown($event: MouseEvent) {
    const {
      top,
      left
    } = this.el.nativeElement?.offsetParent?.getBoundingClientRect();
    this.parentPosition.top = top;
    this.parentPosition.left = left;

    this.mode = 1;
    const boundingRect = this.el.nativeElement?.getBoundingClientRect();
    this.resizeStartMouseClick.top = boundingRect.top - this.parentPosition.top;
    this.resizeStartMouseClick.left =
      boundingRect.left - this.parentPosition.left;
    this.resizeStartMouseClick.width = boundingRect.width;
    this.resizeStartMouseClick.height = boundingRect.height;
    this.resizeStartMouseClick.x = $event.clientX;
    this.resizeStartMouseClick.y = $event.clientY;
    console.log('mousedown', this.resizeStartMouseClick);
  }

  private resizeBox($event: MouseEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    if (this.mode !== 1) {
      return;
    }
    console.log('mousemove');
    console.log($event.clientX);

    this.renderer.setStyle(
      this.el.nativeElement,
      'left',
      this.resizeStartMouseClick.left + 'px'
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'top',
      this.resizeStartMouseClick.top + 'px'
    );

    const newWidth =
      this.resizeStartMouseClick.width +
      ($event.clientX - this.resizeStartMouseClick.x);
    const newHeight =
      this.resizeStartMouseClick.height +
      ($event.clientY - this.resizeStartMouseClick.y);

    console.log('newWidth, newHeight', newWidth + '   ' + newHeight);

    this.renderer.setStyle(this.el.nativeElement, 'width', newWidth + 'px');
    this.renderer.setStyle(this.el.nativeElement, 'height', newHeight + 'px');

    this.onResizedOrDragEnd.emit({
      top: this.resizeStartMouseClick.top,
      left: this.resizeStartMouseClick.left
    } as ILayout);
  }

  private dragStartElement($event: DragEvent) {
    this.mode = 0;
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
    if (this.mode !== 0) {
      return;
    }
    console.log('dragEndElement');
    const newLeft =
      this.dragStartMouseClick.left +
      ($event.clientX - this.parentPosition.left - this.dragStartMouseClick?.x);
    const newTop =
      this.dragStartMouseClick.top +
      ($event.clientY - this.parentPosition.top - this.dragStartMouseClick?.y);

    this.renderer.setStyle(this.el.nativeElement, 'left', newLeft + 'px');
    this.renderer.setStyle(this.el.nativeElement, 'top', newTop + 'px');

    this.mode = 0;
  }
}
