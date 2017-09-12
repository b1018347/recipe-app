import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
    selector: 'app-recipe-item-detail',
    templateUrl: './recipe-item-detail.component.html'
})

export class RecipeItemDetailComponent{
    @Input() recipe: Recipe;

    loadRecipe(recipe) {
        console.log(recipe);
        this.recipe = recipe;
    }
}