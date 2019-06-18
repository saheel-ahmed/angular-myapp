import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-en-header',
  templateUrl: './en-header.component.html',
  styleUrls: ['./en-header.component.css']
})
export class EnHeaderComponent implements OnInit {


  resData : object = {
    en: {
      menus: [
        { 
          name: "menu1", 
          links: [ 
            { name: 'FAQs', link: 'en/faqs', sublinks: [] },
            { name: 'Career', link: 'en/career', sublinks: [] },
            { name: 'Volunteers', link: 'en/volunteers', sublinks: [] },
            { name: 'Contact', link: 'en/contact', sublinks: [] }
          ] 
        },
        { 
          name: "menu2", 
          links: [ 
            { name: 'Home', link: 'en/home', sublinks: [] },
            { name: 'About Us', link: 'en/about-us', sublinks: [] },
            { name: 'Our Services', link: 'en/our-services', sublinks: [ 
                                      { name: 'Service 1', link: 'en/our-services/service1' },
                                      { name: 'Service 2', link: 'en/our-services/service2' } 																		
                                    ] },
            { name: 'Awareness', link: 'en/awareness', sublinks: [ 
                                      { name: 'Awareness 1', link: 'en/awareness/awarenes1' },
                                      { name: 'Awareness 2', link: 'en/awareness/awarenes2' } 																		
                                    ] },
            { name: 'News', link: 'en/news', sublinks: [] },
            { name: 'Events', link: 'en/events', sublinks: [] },
          ] 
        }
      ]
    }
  };

  menuOpen : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu($event, m1){
    $event.stopPropagation(); // Only seems to
    $event.preventDefault(); // work with both
    for(let m of this.resData.en.menus){
      for(let ml of m.links){
        if(m1.name == ml.name){
          if(ml.isOpen)
            ml['isOpen'] = false;
          else
            ml['isOpen'] = true;
        }          
        else
          ml['isOpen'] = false;
      }
    }
  }

  openMenu(){
    this.menuOpen = !this.menuOpen;
  }

}