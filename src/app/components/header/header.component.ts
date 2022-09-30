import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  templateUrl: './header.component.html',
  selector: 'app-header',
})
export class Header {
  @Output() featureSelect = new EventEmitter<string>();

  selectFeature(featureName: string) {
    this.featureSelect.emit(featureName);
  }
}
