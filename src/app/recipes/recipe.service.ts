import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
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

      getRecipe(id) {
        return this.recipes[id];
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes);
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes);
      }

      deleteRecipe(index: number) {
          this.recipes.splice(index, 1);
          this.recipesChanged.next(this.recipes);
      }
}