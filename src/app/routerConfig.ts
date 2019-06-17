import { Routes } from '@angular/router';
import { EnPagesComponentComponent } from './en-pages-component/en-pages-component.component';

const appRoutes: Routes = [
  { path: 'en/:page', 
    component: EnPagesComponentComponent 
  }
];
export default appRoutes;