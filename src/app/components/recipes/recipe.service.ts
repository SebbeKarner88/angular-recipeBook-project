import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {
  }

  private recipes: Recipe[] = [
    new Recipe(
      'Rancheros',
      'A really nice Rancheros recipe!',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
      [
        new Ingredient('Egg', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Tomatoes', 5),
        new Ingredient('Garlic', 3)
      ]
    ),
    new Recipe(
      'Cheeseburger XL',
      'A big burger that oozes cheese.',
      'https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Cheese', 5),
        new Ingredient('Garlic', 2)
      ]
    ),
    new Recipe(
      'Grilled Cheese Sandwich',
      'Classic grilled.cheese, USA!',
      'https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Cheese', 3),
        new Ingredient('Butter', 1),
        new Ingredient('Spices', 1)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredientsFromRecipe(ingredients);
  }
}
