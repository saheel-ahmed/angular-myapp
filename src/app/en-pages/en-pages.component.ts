import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CmsPageService } from './../services/cms-page.service';


@Component({
  selector: 'app-en-pages',
  templateUrl: './en-pages.component.html',
  styleUrls: ['./en-pages.component.css']
})
export class EnPagesComponent implements OnInit {

  pageUris : any;
  pageContent : string = "";
  pageFooter : string = "";
  cmsPages : any;
  pages : any;

  constructor(private route: ActivatedRoute, private router: Router,
  private elRef: ElementRef, private renderer: Renderer2, 
  private cmsPageService :CmsPageService
  ) { 
    this.pageUris = this.cmsPageService.cmsPageURI;
    this.cmsPages = this.cmsPageService.cmsPageResponse;
    this.pageFooter = this.cmsPages.en.footer;
  }

  ngOnInit() {
    this.route.params.subscribe(params => { 
      if(this.pageUris.includes(params['page'])){
        //this.pagename = params['page'];
        //find page content
        for(let page of this.cmsPages.en.pages){
            if(page.link === 'en/'+params['page']){
               this.pageContent = page.content;
               document.title = page.title;
               var metaList = document.getElementsByTagName("META");
               metaList[1].setAttribute("content",page.metaDescription);
               break;
            }else{
              this.pageContent = "<h1>Page content not yet set!</h1>";
               document.title = "Coming soon!";
               var metaList = document.getElementsByTagName("META");
               metaList[1].setAttribute("content","noarchive");
            }             
        }
       
      }else{
        this.router.navigate(['page/en/404']);
      }      
    });
  }

}