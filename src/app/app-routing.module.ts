import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './component/auth/auth.component';
import { HomeComponent } from './component/home/home.component';
import { SellerHomePageComponent } from './component/seller-home-page/seller-home-page.component';
import { SellerComponent } from './component/seller/seller.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { UserSignUpComponent } from './component/user-sign-up/user-sign-up.component';

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
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'signup',
    component: UserSignUpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
