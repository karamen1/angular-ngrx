import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ILayout } from './../../models/layout-control';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true
    }
  ]
})
export class CounterInputComponent implements ControlValueAccessor {
  positionStyle: unknown;
  @Input() disable: boolean = false;
  @Input('layout') set layout(pos: ILayout) {
    if (pos) {
      this.positionStyle = {
        top: `${pos.top}px`,
        left: `${pos.left}px`,
        position: 'relative'
      };
    }
  }
  onChange: Function = () => {};
  onTouch: Function = () => {};

  value: number = 0;

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }

  increase() {
    this.value++;
    this.onChange(this.value);
  }

  decrease() {
    this.value--;
  }
}
