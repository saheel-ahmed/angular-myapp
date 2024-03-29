import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-en-pages-component',
  templateUrl: './en-pages-component.component.html',
  styleUrls: ['./en-pages-component.component.css']
})
export class EnPagesComponentComponent implements OnInit {

  pagename = 'Home';

  pages : string[] = [ 'home', 'about-us', 'our-services', 'awareness', 'news', 'events'];

  pageContent : string = "";
  dynamicValue : string = "";

  constructor(private route: ActivatedRoute, private router: Router,
  private elRef: ElementRef, private renderer: Renderer2) {

    this.pageContent = "<ul id=\"faq1\" class=\"faqs\"> <li id=\"faq-item1\" class=\"faq-item\">Item 1</li> <li id=\"faq-item2\" class=\"faq-item\">Item 2</li> </ul> <hr /><ul id=\"faq2\" class=\"faq2\"> <li id=\"faq2-item1\" class=\"faq2-item\">Item 1</li> <li id=\"faq2-item2\" class=\"faq2-item\">Item 2</li> </ul>";


  }

  ngOnInit() {
    this.route.params.subscribe(params => { 
      if(this.pages.includes(params['page'])){
        this.pagename = params['page'];
      }else{
        this.router.navigate(['page/en/404']);
      }      
    });
  }

  ngAfterViewInit() {
      let self = this;
      if(document.getElementsByClassName('faqs')){
        let allContent = this.elRef.nativeElement.querySelector('.faqs');
        let parentContainer = this.elRef.nativeElement.querySelector('#warpper');
        let clickButtons = this.elRef.nativeElement.querySelectorAll('.faq-item');
        for(var i = 0; i < clickButtons.length; i++){
           this.renderer.listen(clickButtons[i], 'click', function($event){
              //functionToCall($event.target); 
              console.log('Im called.... Yahoo!');
              self.functionToCall($event);
           });
        };
      }

      //method 2
      let faq2Items = this.elRef.nativeElement.querySelectorAll(".faq2-item");
      for (let faq2Item of faq2Items) {
          faq2Item.addEventListener('click', function($event){
            console.log("I'm 2 called.... Yahoo!");
            self.functionToCall($event);
          });
      }     
   }

   ngOnDestroy() {
     this.renderer.destroy();
   }
  
   functionToCall($event){
     console.log('Event:', $event);
     this.dynamicValue = "Finally done, " + (new Date()).toLocaleString();
   }

}