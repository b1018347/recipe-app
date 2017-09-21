import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(1, 'Big Burger'
        , 'You will be full after this big burger',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
        new Ingredient('Beef', 100),
        new Ingredient('Chips', 50)
    ]),
        new Recipe(2, 'Chicken Sandwitch',
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
        return this.recipes.find(
            (r) => r.id === id
        );
      }
}