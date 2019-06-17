import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EnPagesComponentComponent } from './en-pages-component/en-pages-component.component';

import appRoutes from './routerConfig';

@NgModule({
  imports:      [ BrowserModule, FormsModule,  RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, EnPagesComponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
