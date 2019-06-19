import { Injectable } from '@angular/core';

@Injectable()
export class CmsPageService {

  cmsPageResponse: any;
  cmsPageURI: any;

  constructor() { 
   
    this.cmsPageURI = new Array();
    this.cmsPageResponse = {
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
            ],
            pages: [
              { name: 'Home', link: 'en/home', title: 'Home | Welcome', metaDescription: '',   content: '<main role="main">  <section id="slider"> <div data-carousel="blah" class="Carousel"> <div class="Carousel-Slide clearfix"> <div class="Carousel-Slide-item" data-background="url(https://dummyimage.com/1980X400/e4f1fd/e4f1fd&text=.)"> <div class="carousel-caption d-none d-md-block"> <div class="carousel-item-inner"> <h2>Lorem Ipsum is simply 1</h2> <p class="mb-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind of shining texts</p><button type="button" class="btn btn-primary mt-3">Button</button> </div></div></div><div class="Carousel-Slide-item" data-background="url(https://dummyimage.com/1980X400/e4f1fd/e4f1fd&text=.)"> <div class="carousel-caption d-none d-md-block"> <div class="carousel-item-inner"> <h2>Lorem Ipsum is simply 2</h2> <p class="mb-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind of shining texts</p><button type="button" class="btn btn-primary mt-3">Button</button> </div></div></div></div><div class="Carousel-Controller"> <div class="Carousel-Controller-Nav"> <div class="Carousel-Controller-Nav-left"> <i class="icon-chevron-sign-left"></i> </div><div class="Carousel-Controller-Nav-right"> <i class="icon-chevron-sign-right"></i> </div></div></div></div>  </section> <section id="about" class="py-5 my-4"> <div class="container"> <div class="row justify-content-center"> <div class="col-lg-8 col-md-8 col-12 text-center"> <h3>Welcome To Sharjah Prevention and Safety Authority</h3> <p class="mt-4">Sharjah Prevention and Safety Authority was established in 2014, pursuant to the<br>Amiri Decree No. 55 of 2014, issued by His Highness Sheikh Dr. Sultan Bin<br>Mohammed Al Qasimi, Member of the Federal Supreme Council, Ruler of Sharjah.</p></div></div></div></section> <section id="highlights" class="py-3 my-2"> <div class="section-title text-center"> <h2 class="mb-5">Highlights</h2> </div><div class="container"> <div class="row"> <div class="col-md-6"> <div class="card border-0 mb-4"> <img class="card-img-top" src="https://dummyimage.com/500/e4f1fd/297FCA&text=[x]" alt="Card image cap"> <div class="card-body"> <h5 class="card-title">Wireframe connects the underlying conceptual structure</h5> <p class="card-text small">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. </p><a href="#" class="">Read More > </a> </div></div></div><div class="col-md-6"> <div class="row"> <div class="col-md-6"> <div class="card border-0 mb-4"> <img class="card-img-top" src="https://dummyimage.com/255/e4f1fd/297FCA&text=[x]" alt="Card image cap"> <div class="card-body"> <small>11 Apr 2016</small> <h5 class="card-title">Lorem Ipsum is simply</h5> <p class="card-text small">Far far away, behind the word mountains, far from the countrie </p></div></div></div><div class="col-md-6"> <div class="card border-0 mb-4"> <img class="card-img-top" src="https://dummyimage.com/255/e4f1fd/297FCA&text=[x]" alt="Card image cap"> <div class="card-body"> <small>11 Apr 2016</small> <h5 class="card-title">Lorem Ipsum is simply</h5> <p class="card-text small">Far far away, behind the word mountains, far from the countrie </p></div></div></div><div class="col-md-6"> <div class="card border-0 mb-4"> <img class="card-img-top" src="https://dummyimage.com/255/e4f1fd/297FCA&text=[x]" alt="Card image cap"> <div class="card-body"> <small>11 Apr 2016</small> <h5 class="card-title">Lorem Ipsum is simply</h5> <p class="card-text small">Far far away, behind the word mountains, far from the countrie </p></div></div></div><div class="col-md-6"> <div class="card border-0 mb-4"> <img class="card-img-top" src="https://dummyimage.com/255/e4f1fd/297FCA&text=[x]" alt="Card image cap"> <div class="card-body"> <small>11 Apr 2016</small> <h5 class="card-title">Lorem Ipsum is simply</h5> <p class="card-text small">Far far away, behind the word mountains, far from the countrie </p></div></div></div></div></div></div></div></section> <section id="upcoming" class="my-5"> <div class="section-title text-center"> <h2 class="mb-5">Upcoming Events</h2> </div><div class="container"> <div class="row"> <div class="col-sm-4"> <div class="card mb-4"> <img class="card-img-top" src="https://dummyimage.com/300/e4f1fd/297FCA&text=[x]" alt="Card image cap"> <div class="card-body"> <h5 class="card-title">Item One</h5> <p class="card-text">Far far away, behind the word mountains, far from the country Vokalia</p></div></div></div><div class="col-sm-4"> <div class="card mb-4"> <img class="card-img-top" src="https://dummyimage.com/300/e4f1fd/297FCA&text=[x]" alt="Card image cap"> <div class="card-body"> <h5 class="card-title">Item One</h5> <p class="card-text">Far far away, behind the word mountains, far from the country Vokalia</p></div></div></div><div class="col-sm-4"> <div class="card mb-4"> <img class="card-img-top" src="https://dummyimage.com/300/e4f1fd/297FCA&text=[x]" alt="Card image cap"> <div class="card-body"> <h5 class="card-title">Item One</h5> <p class="card-text">Far far away, behind the word mountains, far from the country Vokalia</p></div></div></div></div></div></section> <section id="latest-publications" class="mt-5 mb-5"> <div class="section-title text-center"> <h2 class="mb-5">Latest Publications</h2> </div><div class="container"> <div class="row border br-1 m-1"> <div class="col-md-4 col-sm-4 p-l-5 p-4 border-right"> <small>Tag One</small> <p>Wireframe connects conceptual structure</p><small>11 Apr 2016</small> </div><div class="col-md-4 col-sm-4 p-l-5 p-4 border-right"> <small>Tag One</small> <p>Wireframe connects conceptual structure</p><small>11 Apr 2016</small> </div><div class="col-md-4 col-sm-4 p-l-5 p-4"> <small>Tag One</small> <p>Wireframe connects conceptual structure</p><small>11 Apr 2016</small> </div></div></div></section> </main>'
              },
              {name: 'Home', link: 'en/home', title: 'Home | Welcome to SPSA', metaDescription: 'SPSA',   content: '<h1>Comming soon!</h1>'},
              {name: 'About Us', link: 'en/about-us', title: 'About Us | SPSA', metaDescription: 'SPSA',   content: '<h1>Comming soon!</h1>'},
              {name: 'Our Services', link: 'en/our-services', title: 'Our Services | SPSA', metaDescription: 'SPSA',   content: '<h1>Comming soon!</h1>'},
              {name: 'Awareness', link: 'en/awareness', title: 'Awareness | SPSA', metaDescription: 'SPSA',   content: '<h1>Comming soon!</h1>'},
              {name: 'News', link: 'en/news', title: 'News | SPSA', metaDescription: 'SPSA',   content: '<h1>Comming soon!</h1>'},
              {name: 'Events', link: 'en/events', title: 'Events | SPSA', metaDescription: 'SPSA',   content: '<h1>Comming soon!</h1>'}
            ],
            footer: '<footer id="footer"> <div class="footer pt-5 pb-5 border-bottom"> <div class="container"> <div class="row"> <div class="col-md-8 col-sm-8"> <h5>Contact Us</h5> <address>University City Road, Muwaileh Suburb, Sharjah, UAE<br>Phone: +9716 5677770| Fax: +9716 5677775 | WhatsApp: +97156 3295559<br>Email: info@spsa.shj.ae</address> </div><div class="col-md-4 col-sm-4"> <h5>Follow Us</h5> <ul class="list-unstyled list-inline social-icons"> <li class="list-inline-item">F</li><li class="list-inline-item">t</li><li class="list-inline-item">i</li><li class="list-inline-item">h</li></ul> </div></div></div></div></footer>'
          }
    };   

    for(let menu of this.cmsPageResponse.en.menus){
      for(let link of menu.links){
        let pagename = link.link.replace('en/', '');
        this.cmsPageURI.push(pagename.toString());
        for(let sublink of link.sublinks){
          let subpagename = sublink.link.replace('en/', '');
          this.cmsPageURI.push(subpagename);
        }
      }
    }
    

  }

}