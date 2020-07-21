import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
          'A Test',
          'This is A Test',
          'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg',
          [
            new Ingredient("Onion", 1),
            new Ingredient("Garlic", 1),
            new Ingredient("Tomatoes", 4)
        ]
        ),
      ];

      constructor(private slService: ShoppingListService) {};

      getRecipes(){
          return this.recipes.slice();
      }

      recipeSelected = new EventEmitter<Recipe>();

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}