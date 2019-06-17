import { Routes } from '@angular/router';
import { EnPagesComponentComponent } from './en-pages-component/en-pages-component.component';
import { EnPageNotFoundComponent } from './en-page-not-found/en-page-not-found.component';

const appRoutes: Routes = [
  { path: 'en/:page', 
    component: EnPagesComponentComponent 
  },
  {
    path: 'page/en/404',
    component: EnPageNotFoundComponent
  }
];
export default appRoutes;