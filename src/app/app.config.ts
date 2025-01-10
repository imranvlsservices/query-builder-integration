import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes'; // Ensure the correct path and named export

export const appConfig = [
  provideRouter(appRoutes), // Pass the routes to `provideRouter`
];
