import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './admin/product/product.component';
import { CategogyComponent } from './admin/categogy/categogy.component';

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
    }
];
