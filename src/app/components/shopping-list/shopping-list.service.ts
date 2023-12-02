import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();
  // Här skapar vi en event emitter som hjälper oss att uppdatera child components värden på update.


  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 12)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice()); // här skickar vi den ändrade listan tillbaka till child component.
  }

  addIngredientsFromRecipe(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients); // Spread ingredienser och lägga till i listan!
    this.ingredientsChanged.emit(this.ingredients.slice()); // emittar signal att listan ändrats!
  }
}

