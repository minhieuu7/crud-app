import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './admin/product/product.component';
import { CategogyComponent } from './admin/categogy/categogy.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },

    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'categories',
        component: CategogyComponent
    },
    {
        path: 'product-edit/:id',
        component: ProductEditComponent
    }
];
