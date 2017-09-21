import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
@Component({
    selector: 'app-recipe-item-detail',
    templateUrl: './recipe-item-detail.component.html',
    styleUrls: ['./recipe-item-detail.css']
})

export class RecipeItemDetailComponent implements OnInit{
    recipe: Recipe;
    constructor(private recipeService: RecipeService,
                private shoppingListSerivce: ShoppingListService,
                private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.recipe = this.recipeService.getRecipe(+params['id']);
            }
        );
    }



    onAddToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListSerivce.addIngredients(ingredients);
    }
}