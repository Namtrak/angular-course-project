import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'  
})
export class HeaderComponent {
  @Output() showRecipes = new EventEmitter<{recipeView: boolean, shoppingListView: boolean}>();
  @Output() showShoppingList = new EventEmitter<{recipeView: boolean, shoppingListView: boolean}>();


  onRecipesClicked() {
    this.showRecipes.emit({recipeView: true, shoppingListView: false});
  }

  onShoppingListClicked() {
    this.showShoppingList.emit({recipeView: false, shoppingListView: true});
  }
}