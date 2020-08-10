import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions'
import * as fromApp from '../store/app.reducer';


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //     new Recipe(
  //       'A Test',
  //       'This is A Test',
  //       'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg',
  //       [
  //         new Ingredient("Onion", 1),
  //         new Ingredient("Garlic", 1),
  //         new Ingredient("Tomatoes", 4)
  //     ]
  //     ),
  //   ];
  private recipes: Recipe[] = [];

  constructor(private store: Store<fromApp.AppState>,
  ) { };

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    //   this.slService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}