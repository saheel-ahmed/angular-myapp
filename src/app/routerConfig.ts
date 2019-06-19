import { Routes } from '@angular/router';
import { EnPagesComponentComponent } from './en-pages-component/en-pages-component.component';
import { EnPageNotFoundComponent } from './en-page-not-found/en-page-not-found.component';
import { EnPagesComponent } from './en-pages/en-pages.component';

const appRoutes: Routes = [
  { path: '/',
    redirectTo: 'en/home', 
    component: EnPagesComponent 
  },
  { path: 'en/:page', 
    component: EnPagesComponent 
  },
  {
    path: 'page/en/404',
    component: EnPageNotFoundComponent
  }
];
export default appRoutes;