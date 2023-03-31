import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SellerHomePageComponent } from './component/seller-home-page/seller-home-page.component';
import { SellerComponent } from './component/seller/seller.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { AuthGuard } from './services/auth.guard';

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
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
