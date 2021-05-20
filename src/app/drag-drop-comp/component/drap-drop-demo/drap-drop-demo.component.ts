import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  Type,
  ViewChild
} from '@angular/core';
import { ILayout } from '../../models/layout-control';
import { LayoutCore } from '../../my-control-layout.base.component';
import { DynamicContent } from '../dynamiccontent';
import { MyButtonComponent } from '../my-button/my-button.component';
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
    console.log('Start addComponent', top, left);
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

  drop(event: any) {
    console.log(event);
    const componentType = event.container.data[event.currentIndex];
    const { x, y } = event.distance;
    this.addComponent(componentType);
  }

  drag(event: any) {
    console.log(event);
  }
}
