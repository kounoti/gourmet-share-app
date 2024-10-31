import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  message = '';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    switch (this.clickCount) {
      case 1:
        this.message = 'こんにちは、Angular';
        break;
      case 2:
        this.message = '再びこんにちは、Angular';
        break;
      case 3:
        this.message = '三度目のこんにちは、Angular';
        break;
      default:
        this.message = 'クリック回数が多すぎます！';
    }
  }
}
