import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { ManageCategoryComponent } from './component/manage-category/manage-category.component';
import { SellerHomePageComponent } from './component/seller-home-page/seller-home-page.component';
import { SellerComponent } from './component/seller/seller.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { UserSignUpComponent } from './component/user-sign-up/user-sign-up.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: UserLoginComponent,
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'seller',
    component: SellerComponent,
  },
  {
    path: 'seller-home',
    component: SellerHomePageComponent,
  },

  {
    path: 'signup',
    component: UserSignUpComponent,
  },
  {
    path: 'category',
    component: ManageCategoryComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
