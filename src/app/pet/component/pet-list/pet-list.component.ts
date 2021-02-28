import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pet } from '../../model/pet';
import { PetState } from '../../store/reducers/pet.reducer';
import { petListSelector } from '../../store/selector/pet.selector';
import * as PetAction from '../../store/actions';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  petList$: Observable<ReadonlyArray<Pet>>;
  constructor(private store: Store<PetState>) {}

  displayedColumns: string[] = ['id', 'name', 'color'];

  ngOnInit(): void {
    this.petList$ = this.store.pipe(select(petListSelector));
    this.store.dispatch(PetAction.loadPets());

    this.petList$.subscribe((e) => console.log(e));
  }
}
