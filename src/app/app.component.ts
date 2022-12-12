import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
import { NavigationService } from './core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'inv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit  {
  title = 'Invoice.Platform.UI';
  @ViewChild('drawer') drawer!: MatSidenav;

  constructor(private observer: BreakpointObserver, private router: Router, private navigation: NavigationService) {
    this.navigation.disableReuseRoute();
  }

  public ngOnInit(): void { }
  
  public clickEvent(data: string): void{
    this.router.navigate([data]);
  }

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
        if (res.matches) {
            this.drawer.mode = 'over';
            this.drawer.close();
        } else {
            this.drawer.mode = 'side';
            this.drawer.open();
        }
      });
    }, 200)
  }
}
