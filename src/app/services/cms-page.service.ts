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
              { name: 'Home', link: 'en/home', title: 'Home | Welcome', metaDescription: '',   content: '<main role="main"> <section class="jumbotron text-center"> <div class="container"> <h1 class="jumbotron-heading">Album example</h1> <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p><p> <a href="#" class="btn btn-primary my-2">Main call to action</a> <a href="#" class="btn btn-secondary my-2">Secondary action</a> </p></div></section> <div class="album py-5 bg-light"> <div class="container"> <div class="row"> <div class="col-md-4"> <div class="card mb-4 shadow-sm"> <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> <div class="card-body"> <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p><div class="d-flex justify-content-between align-items-center"> <div class="btn-group"> <button type="button" class="btn btn-sm btn-outline-secondary">View</button> <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> </div><small class="text-muted">9 mins</small> </div></div></div></div><div class="col-md-4"> <div class="card mb-4 shadow-sm"> <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> <div class="card-body"> <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p><div class="d-flex justify-content-between align-items-center"> <div class="btn-group"> <button type="button" class="btn btn-sm btn-outline-secondary">View</button> <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> </div><small class="text-muted">9 mins</small> </div></div></div></div><div class="col-md-4"> <div class="card mb-4 shadow-sm"> <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> <div class="card-body"> <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p><div class="d-flex justify-content-between align-items-center"> <div class="btn-group"> <button type="button" class="btn btn-sm btn-outline-secondary">View</button> <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> </div><small class="text-muted">9 mins</small> </div></div></div></div><div class="col-md-4"> <div class="card mb-4 shadow-sm"> <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> <div class="card-body"> <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p><div class="d-flex justify-content-between align-items-center"> <div class="btn-group"> <button type="button" class="btn btn-sm btn-outline-secondary">View</button> <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> </div><small class="text-muted">9 mins</small> </div></div></div></div><div class="col-md-4"> <div class="card mb-4 shadow-sm"> <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> <div class="card-body"> <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p><div class="d-flex justify-content-between align-items-center"> <div class="btn-group"> <button type="button" class="btn btn-sm btn-outline-secondary">View</button> <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> </div><small class="text-muted">9 mins</small> </div></div></div></div><div class="col-md-4"> <div class="card mb-4 shadow-sm"> <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> <div class="card-body"> <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p><div class="d-flex justify-content-between align-items-center"> <div class="btn-group"> <button type="button" class="btn btn-sm btn-outline-secondary">View</button> <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> </div><small class="text-muted">9 mins</small> </div></div></div></div><div class="col-md-4"> <div class="card mb-4 shadow-sm"> <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> <div class="card-body"> <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p><div class="d-flex justify-content-between align-items-center"> <div class="btn-group"> <button type="button" class="btn btn-sm btn-outline-secondary">View</button> <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> </div><small class="text-muted">9 mins</small> </div></div></div></div><div class="col-md-4"> <div class="card mb-4 shadow-sm"> <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> <div class="card-body"> <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p><div class="d-flex justify-content-between align-items-center"> <div class="btn-group"> <button type="button" class="btn btn-sm btn-outline-secondary">View</button> <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> </div><small class="text-muted">9 mins</small> </div></div></div></div><div class="col-md-4"> <div class="card mb-4 shadow-sm"> <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> <div class="card-body"> <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p><div class="d-flex justify-content-between align-items-center"> <div class="btn-group"> <button type="button" class="btn btn-sm btn-outline-secondary">View</button> <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> </div><small class="text-muted">9 mins</small> </div></div></div></div></div></div></div></main>'
              },
              {name: 'Home', link: 'en/home', title: 'Home | Welcome to SPSA', metaDescription: 'SPSA',   content: '<h1>Comming soon!</h1>'},
              {name: 'About Us', link: 'en/about-us', title: 'About Us | SPSA', metaDescription: 'SPSA',   content: '<h1>Comming soon!</h1>'},
              {name: 'Our Services', link: 'en/our-services', title: 'Our Services | SPSA', metaDescription: 'SPSA',   content: '<h1>Comming soon!</h1>'},
              {name: 'Awareness', link: 'en/awareness', title: 'Awareness | SPSA', metaDescription: 'SPSA',   content: '<h1>Comming soon!</h1>'},
              {name: 'News', link: 'en/news', title: 'News | SPSA', metaDescription: 'SPSA',   content: '<h1>Comming soon!</h1>'},
              {name: 'Events', link: 'en/events', title: 'Events | SPSA', metaDescription: 'SPSA',   content: '<h1>Comming soon!</h1>'}
            ],
            footer: '<footer class="text-muted"> <div class="container"> <p class="float-right"> <a href="#">Back to top</a> </p><p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p><p>New to Bootstrap? <a href="https://getbootstrap.com/">Visit the homepage</a> or read our <a href="/docs/4.3/getting-started/introduction/">getting started guide</a>.</p></div></footer>'
          }
    };   

    for(let menu of this.cmsPageResponse.en.menus){
      for(let link of menu.links){
        let pagename = link.link.replace('en/', '');
        console.log(pagename);
        this.cmsPageURI.push(pagename.toString());
        for(let sublink of link.sublinks){
          let subpagename = sublink.link.replace('en/', '');
          this.cmsPageURI.push(subpagename);
        }
      }
    }
    

  }

}