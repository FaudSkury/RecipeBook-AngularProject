import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Egg',
      'Just an egg',
      'data:image/jpeg;base64,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'
    ),
    new Recipe(
      'Egg',
      'Just an egg',
      'data:image/jpeg;base64,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'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
