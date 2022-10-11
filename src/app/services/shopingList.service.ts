import { Injectable } from '@angular/core';
import { Ingredient } from '../components/shooping-list/ingredient.model';
import { Subject } from 'rxjs';
@Injectable()
export class ShopingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [new Ingredient('egg', 2)];

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredientsFromSelectedRecipe(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
