import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css'],
})
export class ShoopingListComponent implements OnInit {
  ingredients: Ingredient[] = [new Ingredient('egg', 2)];
  constructor() {}
  ingredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  ngOnInit(): void {}
}
