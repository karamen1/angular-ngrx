import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-button',
  template: `<button [ngClass]="{disabled: disable}">{{label}}</button>`
})
export class MyButtonComponent implements OnInit {
  @Input() label: string = "My Button";
  @Input() disable: boolean = false;
  constructor() { }
  ngOnInit(): void {
  }
}
