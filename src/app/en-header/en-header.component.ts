import { Component, OnInit } from '@angular/core';
import { CmsPageService } from './../services/cms-page.service';


@Component({
  selector: 'app-en-header',
  templateUrl: './en-header.component.html',
  styleUrls: ['./en-header.component.css']
})
export class EnHeaderComponent implements OnInit {


  cmsPageResponse : any;

  menuOpen : boolean = false;

  constructor(private cmsPageService :CmsPageService) {
    this.cmsPageResponse = cmsPageService.cmsPageResponse;
  }

  ngOnInit() {
  }

  toggleMenu($event, m1){
    $event.stopPropagation(); // Only seems to
    $event.preventDefault(); // work with both
    for(let m of this.cmsPageResponse.en.menus){
      for(let ml of m.links){
        if(ml.sublinks.length > 0){
           if(m1.name == ml.name){
            if(ml.isOpen)
              ml['isOpen'] = false;
            else
              ml['isOpen'] = true;
          } 
          else{          
            ml['isOpen'] = false;
          }
        }                
        else{          
          ml['isOpen'] = false;
        }
      }
    }
  }

  openMenu(){
    this.menuOpen = !this.menuOpen;
  }

}