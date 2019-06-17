import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import appRoutes from './routerConfig';

import { HelloComponent } from './hello.component';
import { EnPagesComponentComponent } from './en-pages-component/en-pages-component.component';
import { EnPageNotFoundComponent } from './en-page-not-found/en-page-not-found.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,  RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, EnPagesComponentComponent, EnPageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
