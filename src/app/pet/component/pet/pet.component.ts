import { Component, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  notifier = new Subject();
  constructor() {}

  ngOnInit(): void {
    const observable$ = interval(1000);
    observable$.pipe(takeUntil(this.notifier)).subscribe((x) => {
      console.log('ccxccccccc', x);
    });
  }

  ngOnDestroy() {
    this.notifier.next();
    this.notifier.complete();
  }
}
