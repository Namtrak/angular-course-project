import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipesService {
    
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {}
    
    private recipes: Recipe[] = [
        new Recipe('Test Recipe 1', 'This is a test 1', 
        'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg', 
        [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),

        new Recipe('Test Recipe 2', 'This is a test 2', 
        'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg', 
        [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]),

        new Recipe('Test Recipe 3', 'This is a test 3', 
        'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg', 
        [new Ingredient('Carrot', 3), new Ingredient('Tomatoes', 10)])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToIngredientsService(ingredients: Ingredient[]) {
        this.shoppingListService.addListOfIngredients(ingredients);
    }
}