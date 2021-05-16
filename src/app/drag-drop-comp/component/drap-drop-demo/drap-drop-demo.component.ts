import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  Type,
  ViewChild
} from '@angular/core';
import { ILayout } from '../../models/layout-control';
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

  addComponent() {
    if (!this.selectedType) {
      return;
    }
    let compRef;

    switch (this.selectedType[0]) {
      case 'Counter':
        compRef = this.generateAndAddComponent(CounterInputComponent);
        compRef as ComponentRef<CounterInputComponent>;
        compRef.instance.layout = {
          top: 10,
          left: 100
        } as ILayout;
        break;
      case 'Textarea':
        compRef = this.generateAndAddComponent(MyAreaComponent);
        compRef as ComponentRef<MyAreaComponent>;
        break;
      case 'Button':
        compRef = this.generateAndAddComponent(MyButtonComponent);
        compRef as ComponentRef<MyButtonComponent>;
        compRef.instance.layout = {
          top: 10,
          left: 100
        } as ILayout;
        break;
      default:
        break;
    }
  }

  drop(event: CdkDragDrop<string[]>) {}
}
