import { Routes } from '@angular/router';
import { RouteGuardService } from 'src/app/services/route-guard.service';
import { ManageCategoryComponent } from './manage-category/manage-category.component';

export const MaterialRoutes: Routes = [
  {
    path: 'category',
    component: ManageCategoryComponent,
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin'],
    },
  },
];
