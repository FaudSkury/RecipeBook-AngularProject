import { Component, OnInit, Input } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input('selectedRecipe') recipe: Recipe;
  constructor(private recipesService: RecipesService) {}

  handleClick() {
    this.recipesService.addIngredinetsToShoppingList(this.recipe.ingredients);
  }

  ngOnInit(): void {}
}
