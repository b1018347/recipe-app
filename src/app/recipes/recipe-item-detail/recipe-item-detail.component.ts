import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    id: number;
    constructor(private recipeService: RecipeService,
                private shoppingListSerivce: ShoppingListService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.recipe = this.recipeService.getRecipe(+params['id']);
            }
        );
    }

    onDeleteRecipe() {
       this.recipeService.deleteRecipe(this.id);
       this.router.navigate(['/recipes']);
    }

    onAddToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListSerivce.addIngredients(ingredients);
    }
}