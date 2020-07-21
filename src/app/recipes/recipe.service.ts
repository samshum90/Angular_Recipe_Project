import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';

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

      getRecipes(){
          return this.recipes.slice();
      }

      recipeSelected = new EventEmitter<Recipe>();
}