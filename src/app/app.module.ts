import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import appRoutes from './routerConfig';

import { HelloComponent } from './hello.component';
import { EnPagesComponentComponent } from './en-pages-component/en-pages-component.component';
import { EnPageNotFoundComponent } from './en-page-not-found/en-page-not-found.component';
import { EnHeaderComponent } from './en-header/en-header.component';
import { FaqitemDirective } from './faqitem.directive';
import { SafeHtmlPipe } from './safe-html.pipe';
import { CmsPageService } from './services/cms-page.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule,  RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, EnPagesComponentComponent, EnPageNotFoundComponent, EnHeaderComponent, FaqitemDirective, SafeHtmlPipe ],
  bootstrap:    [ AppComponent ],
  providers: [CmsPageService]
})
export class AppModule { }
