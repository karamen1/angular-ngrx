import { Component, ComponentFactoryResolver, ComponentRef, OnInit, Type, ViewChild } from '@angular/core';
import { ILayout } from '../../models/layout-control';
import { DynamicContent } from '../dynamiccontent';
import { MyButtonComponent } from '../my-button/my-button.component';
import { CounterInputComponent } from './../counter-input/counter-input.component';

@Component({
  selector: 'app-drap-drop-demo',
  templateUrl: './drap-drop-demo.component.html',
  styleUrls: ['./drap-drop-demo.component.css']
})
export class DrapDropDemoComponent implements OnInit {
  componentTypes: string[] = ['Counter', 'Dropdown', 'Button', 'Label', 'ListBox'];
  selectedType: string;

  @ViewChild(DynamicContent) insertionPoint: DynamicContent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  private generateAndAddComponent(componentType: Type<any>) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    let viewContainerRef = this.insertionPoint.viewContainerRef;
    return viewContainerRef.createComponent(componentFactory);
  }

  addComponent() {
    if (!this.selectedType) {
      return;
    }
    let compRef;

    switch (this.selectedType[0]) {
      case 'Counter':
        compRef = this.generateAndAddComponent(CounterInputComponent);
        compRef as ComponentRef<CounterInputComponent>;
        compRef.instance.disable = true;
        compRef.instance.layout = {
          top: 10,
          left: 100
        } as ILayout;
        break;
      case 'Button':
        compRef = this.generateAndAddComponent(MyButtonComponent);
        compRef as ComponentRef<MyButtonComponent>;
        compRef.instance.disable = true;
        break;
      default:
        break;
    }



  }

}
