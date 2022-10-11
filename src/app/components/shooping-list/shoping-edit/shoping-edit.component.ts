import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShopingListService } from 'src/app/services/shopingList.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css'],
})
export class ShopingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(private shopingListService: ShopingListService) {}

  handleAddIngredient() {
    this.shopingListService.addIngredient({
      name: this.nameInputRef.nativeElement.value,
      amount: this.amountInputRef.nativeElement.value,
    });
  }
}
