import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/product/product.component').then(m => m.ProductComponent)
  },
  {
    path: 'product-add',
    loadComponent: () => import('./features/product-add/product-add.component').then(m => m.ProductAddComponent)
  },
  {
    path: 'product-list',
    loadComponent: () => import('./features/product-list/product-list.component').then(m => m.ProductListComponent)
  },
  {
    path: 'product-summary',
    loadComponent: () => import('./features/product-summary/product-summary.component').then(m => m.ProductSummaryComponent)
  }
];
