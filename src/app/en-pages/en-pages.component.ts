import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CmsPageService } from './../services/cms-page.service';


@Component({
  selector: 'app-en-pages',
  templateUrl: './en-pages.component.html',
  styleUrls: ['./en-pages.component.css']
})
export class EnPagesComponent implements OnInit {

  pageContent : string = "";

  constructor(private route: ActivatedRoute, private router: Router,
  private elRef: ElementRef, private renderer: Renderer2, 
  private cmsPageService :CmsPageService
  ) { 

  }

  ngOnInit() {
  }

}