import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(protected router: Router) { }

  public disableReuseRoute(): void{
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd){
        this.router.navigated = false;
      }
    });
  }
}
