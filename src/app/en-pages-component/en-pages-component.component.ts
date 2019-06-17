import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-en-pages-component',
  templateUrl: './en-pages-component.component.html',
  styleUrls: ['./en-pages-component.component.css']
})
export class EnPagesComponentComponent implements OnInit {

  pagename = 'Home';

  pages : string[] = [ 'home', 'about', 'services' ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => { 
      if(this.pages.includes(params['page'])){
        this.pagename = params['page'];
      }else{
        this.router.navigate(['page/en/404']);
      }      
    });
  }
  

}