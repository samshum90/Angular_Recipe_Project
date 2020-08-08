import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

import { Ingredient } from '../shared/ingredient.model';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] };
  private subscription: Subscription;

  constructor(
    private slService: ShoppingListService,
    private store: Store<{shoppingList: { ingredients: Ingredient[] }}>,
    ) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList')
    // this.ingredients = this.slService.getIngredients();
    // this.subscription = this.slService.ingredientsChanged
    // .subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }
  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
