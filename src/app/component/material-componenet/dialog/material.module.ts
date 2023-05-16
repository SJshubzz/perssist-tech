import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../shared/material/material.module';
import { CategoryComponent } from './category/category.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MaterialRoutes } from './material.routing';
import { ViewBillProductsComponent } from './view-bill-products/view-bill-products.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
  ],
  providers: [],
  declarations: [
    ViewBillProductsComponent,
    ConfirmationComponent,
    ChangePasswordComponent,
    CategoryComponent,
    ProductComponent,
  ],
})
export class MaterialComponentsModule {}
