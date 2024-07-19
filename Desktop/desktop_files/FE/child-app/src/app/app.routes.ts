import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildContentComponent } from './child-content/child-content.component';
import { ChildTestComponent } from './child-test/child-test.component';

export const routes: Routes = [
    {
        path: '',
        component: ChildContentComponent
    },
    {
        path: 'test',
        loadComponent: () => import('./child-test/child-test.component').then(c => c.ChildTestComponent)
    },

];
