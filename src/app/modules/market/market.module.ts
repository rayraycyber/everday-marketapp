import { model, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategroyMenuItemComponent } from './categroy-menu-item/categroy-menu-item.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'products', component: ProductsPageComponent}
];

@NgModule({
  declarations: [
    CategroyMenuItemComponent,
    CategoryMenuComponent,
    ProductsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
      ProductsPageComponent,
  ]
})
export class MarketModule { }
