import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MyFullCourseComponent } from './my-full-course/my-full-course.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatSlideToggleModule,
    HeaderComponent,
    HomeComponent,
    MyFullCourseComponent,
    MatCardModule, // カードのデザイン用
    MatButtonModule, // ボタンのデザイン用
    MatGridListModule, // グリッドレイアウト用
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-test2';
}
