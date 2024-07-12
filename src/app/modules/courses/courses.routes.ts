import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./courses.component'),
  },
  {
    path: 'info/:course',
    loadComponent: () => import('./pages/info/info.component')
  }
];
