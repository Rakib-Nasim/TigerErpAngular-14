import { Component, Input, OnInit } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
 orientation = 'vertical';
   companyName: string="Tiger-Erp"

   pageList:any[]=[{"name":"Author","pageRoutePath":"author-entry"},{"name":"Publisher","pageRoutePath":"publisher-entry"},{"name":"Category","pageRoutePath":"category-entry"}]
  
   constructor(private router: Router) { }

  ngOnInit(): void
   {
     // TODO document why this method 'ngOnInit' is empty
   
   }

    isActive(url:string) {
 
     return this.router.navigate([url]);

      
  }

  isMenuActive(url:any) {
    return this.router.isActive(url, false);
  }

  isMenuOpen(url:any) {
    return this.router.isActive(url, false) && this.orientation !== 'horizontal';
  }

  // toggleSidenav() {
  //   this.layoutService.toggleCollapsed();
  // }



}
