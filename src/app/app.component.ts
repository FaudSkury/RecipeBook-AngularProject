import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  navigationSelect = 'recipe';

  navSelected(pageName: string) {
    this.navigationSelect = pageName;
  }
}
