import { Component } from '@angular/core';
import { RecipesService } from './recipes/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipes: boolean = false;
  showShoppingList: boolean = false;

  onRecipesClicked(show: {recipeView: boolean, shoppingListView: boolean}) {
    this.showRecipes = show.recipeView;
    this.showShoppingList = show.shoppingListView;
  }

  onShoppingListClicked(show: {recipeView: boolean, shoppingListView: boolean}) {
    this.showRecipes = show.recipeView;
    this.showShoppingList = show.shoppingListView;
  }
}
