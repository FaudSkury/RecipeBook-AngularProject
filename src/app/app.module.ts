import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Header } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes/recipes.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { ShoopingListComponent } from './components/shooping-list/shooping-list/shooping-list.component';
import { ShopingEditComponent } from './components/shooping-list/shoping-edit/shoping-edit.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './directives/dropdown.directive';
import { ShopingListService } from './services/shopingList.service';
import { RecipesService } from './services/recipes.service';
@NgModule({
  declarations: [
    AppComponent,
    Header,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoopingListComponent,
    ShopingEditComponent,
    DropdownDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [ShopingListService, RecipesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
