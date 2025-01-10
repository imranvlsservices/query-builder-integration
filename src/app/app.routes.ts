import { Routes } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';

export const appRoutes: Routes = [
  { path: '', component: MainPageComponent }, // Default route
  { path: 'main', component: MainPageComponent }, // Main page route
];
