import { Routes } from '@angular/router';
import { Home } from './modules/home/components/home/home';
import { Layout } from './layout/layout/components/layout/layout/layout';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children:
            [
                {
                    path: '',
                    component: Home
                }
            ],
    }
];
