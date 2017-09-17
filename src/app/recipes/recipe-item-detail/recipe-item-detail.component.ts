import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
    selector: 'app-recipe-item-detail',
    templateUrl: './recipe-item-detail.component.html'
})

export class RecipeItemDetailComponent{
    @Input() recipe: Recipe;
    constructor(private recipeService: RecipeService) {}

    loadRecipe() {
        this.recipeService.recipeSelected.emit(this.recipe);
    }
}