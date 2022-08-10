import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    onIngredientAdded = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredientToList(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.onIngredientAdded.emit(this.ingredients.slice());
    }

    addListOfIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.onIngredientAdded.emit(this.ingredients.slice());
    }
}