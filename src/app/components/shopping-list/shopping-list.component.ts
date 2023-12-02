import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit{

  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe( // Metod för att uppdatera listan när services listan uppdateras.
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }
}
