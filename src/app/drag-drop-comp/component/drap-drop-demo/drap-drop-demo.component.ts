import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  Type,
  ViewChild,
  ViewRef
} from '@angular/core';
import { ILayout } from '../../models/layout-control';
import { LayoutCore } from '../../my-control-layout.base.component';
import { DynamicContent } from '../dynamiccontent';
import { MyButtonComponent } from '../my-button/my-button.component';
import { IDragData } from './../../models/layout-control';
import { CounterInputComponent } from './../counter-input/counter-input.component';
import { MyAreaComponent } from './../my-area/my-area.component';

@Component({
  selector: 'app-drap-drop-demo',
  templateUrl: './drap-drop-demo.component.html',
  styleUrls: ['./drap-drop-demo.component.css']
})
export class DrapDropDemoComponent implements OnInit {
  componentTypes: string[] = [
    'Counter',
    'Button',
    'Label',
    'Textarea',
    'Dropdown'
  ];

  paramTypes: string[] = ['Param1', 'Param2', 'Param3', 'Param4', 'Param5'];

  selectedType: string;

  @ViewChild(DynamicContent) insertionPoint: DynamicContent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  private generateAndAddComponent(componentType: Type<any>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentType
    );
    const viewContainerRef = this.insertionPoint.viewContainerRef;
    return viewContainerRef.createComponent(componentFactory);
  }

  addComponent(componentType: string, top = 0, left = 0) {
    if (!componentType) {
      return;
    }
    let compRef: ComponentRef<LayoutCore>;

    switch (componentType) {
      case 'Counter':
        compRef = this.generateAndAddComponent(CounterInputComponent);
        compRef as ComponentRef<CounterInputComponent>;
        compRef.instance.layout = {
          top: top,
          left: left
        } as ILayout;
        break;
      case 'Textarea':
        compRef = this.generateAndAddComponent(MyAreaComponent);
        compRef as ComponentRef<MyAreaComponent>;
        compRef.instance.layout = {
          top: top,
          left: left
        } as ILayout;
        break;
      case 'Button':
        compRef = this.generateAndAddComponent(MyButtonComponent);
        compRef as ComponentRef<MyButtonComponent>;
        compRef.instance.layout = {
          top: top,
          left: left
        } as ILayout;
        break;
      default:
        break;
    }
  }

  allowDrop(event: any) {
    event.preventDefault();
  }

  drop(event: DragEvent) {
    console.log(event.offsetX, event.offsetY);
    const dragData: IDragData = JSON.parse(
      event.dataTransfer?.getData('data') || ''
    ) as IDragData;
    console.log(dragData);

    if (dragData.type === 'control') {
      this.addComponent(dragData.valueName, event.offsetY, event.offsetX);
    }
  }

  dragstartControl(event: any, value: string) {
    event.dataTransfer.setData(
      'data',
      JSON.stringify({
        type: 'control',
        valueName: value
      } as IDragData)
    );
  }

  dragstartParam(event: any, value: string) {
    event.dataTransfer.setData(
      'data',
      JSON.stringify({
        type: 'param',
        valueName: value
      } as IDragData)
    );
  }

  exportLayout() {
    this.insertionPoint.viewContainerRef.remove(0);
    const numberOfElement = this.insertionPoint.viewContainerRef.length;
    for (let index = 0; index < numberOfElement; index++) {
      const element: ViewRef = this.insertionPoint.viewContainerRef.get(
        index
      ) as ViewRef;
      console.log(element);
      this.insertionPoint.viewContainerRef.remove(0);
    }
  }

  delete() {}
}
