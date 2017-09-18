import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Big Burger'
        , 'You will be full after this big burger',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
        new Ingredient('Beef', 100),
        new Ingredient('Chips', 50)
    ]),
        new Recipe('Chicken Sandwitch',
         'Quick and easy sandwitch',
         'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Chicken Breast', 2)
        ])
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}