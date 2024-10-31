import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyFullCourseComponent } from './my-full-course/my-full-course.component';
import { FullCourseRegistrationComponent } from './full-course-registration/full-course-registration.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: '', redirectTo: 'app-login', pathMatch: 'full' }, // デフォルトでログイン画面にリダイレクト
  { path: 'app-login', component: LoginComponent },
  { path: 'app-signup', component: SignupComponent },
  { path: 'app-home', component: HomeComponent },
  { path: 'my-full-course', component: MyFullCourseComponent },
  {
    path: 'app-full-course-registration',
    component: FullCourseRegistrationComponent,
  },
  { path: 'dashboard', component: HomeComponent }, // ダッシュボードルートとしてHomeComponentを仮設定
];

// export const routes: Routes = [
//   { path: 'app-home', component: HomeComponent },
//   { path: 'app-login', component: LoginComponent },
//   { path: 'my-full-course', component: MyFullCourseComponent },
//   {
//     path: 'app-full-course-registration',
//     component: FullCourseRegistrationComponent,
//   }, // ルートを追加
// ];

// export const routes: Routes = [
//   { path: '', component: LoginComponent }, // デフォルトでログイン画面を表示
//   { path: 'login', component: LoginComponent }, // /loginパスでアクセス可能

//   // 認証が必要なルート
//   { path: 'app-home', component: HomeComponent, canActivate: [AuthGuard] },
//   { path: 'my-full-course', component: MyFullCourseComponent, canActivate: [AuthGuard] },
//   {
//     path: 'app-full-course-registration',
//     component: FullCourseRegistrationComponent,
//     canActivate: [AuthGuard],
//   },

//   { path: '**', redirectTo: '' }, // 不明なルートはログイン画面にリダイレクト
// ];
