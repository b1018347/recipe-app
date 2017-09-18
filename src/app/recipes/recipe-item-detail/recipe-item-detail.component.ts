import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
@Component({
    selector: 'app-recipe-item-detail',
    templateUrl: './recipe-item-detail.component.html'
})

export class RecipeItemDetailComponent{
    @Input() recipe: Recipe;
    constructor(private recipeService: RecipeService, private shoppingListSerivce: ShoppingListService) {}

    loadRecipe() {
        this.recipeService.recipeSelected.emit(this.recipe);
    }

    onAddToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListSerivce.addIngredients(ingredients);
    }
}