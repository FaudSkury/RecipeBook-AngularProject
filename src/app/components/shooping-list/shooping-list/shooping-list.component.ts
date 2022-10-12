import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipesService } from 'src/app/services/recipes.service';
import { ShopingListService } from 'src/app/services/shopingList.service';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css'],
})
export class ShoopingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(private shopingListService: ShopingListService) {}
  ngOnInit(): void {
    this.ingredients = this.shopingListService.getIngredients();

    this.igChangeSub = this.shopingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
