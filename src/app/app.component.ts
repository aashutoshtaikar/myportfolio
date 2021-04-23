import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myportfolio';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.navLinks = [
      {
        label: 'Home',
        link: './home',
        index: 0,
        active: false
      }, {
        label: 'About',
        link: './home/about',
        index: 1,
        active: true
      }, {
        label: 'Apps',
        link: './home/apps',
        index: 2,
        active: false
      },
    ];
  }
  
  onTabClick(navlink: any){
    this.navLinks
      .filter(n=>n!==navlink)
      .forEach(n=>{
        n.active = false;
      });

    this.navLinks
      .find(n=>n===navlink)
      .active = true;
  }

  ngOnInit(){
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))  
      .subscribe((event) => {
        // code goes here...
        console.log('hh', event)
      })
    // this.route.queryParams.subscribe(data=>{
    //   console.log("here", data);
    // })
  }
}
