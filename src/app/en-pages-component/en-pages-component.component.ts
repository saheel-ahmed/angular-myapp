import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-en-pages-component',
  templateUrl: './en-pages-component.component.html',
  styleUrls: ['./en-pages-component.component.css']
})
export class EnPagesComponentComponent implements OnInit {

  pagename = 'Home';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => { 
      this.pagename = params['page'];
    });
  }

}