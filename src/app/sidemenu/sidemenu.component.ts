import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  NavigationService,
  SideNavDirection
} from '../services/navigation.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  showSideNav: Observable<boolean>;

  @Input() sidenavTemplateRef: any;
  @Input() duration: number = 0.25;
  @Input() navWidth: number = window.innerWidth;
  @Input() direction: SideNavDirection = SideNavDirection.Left;

  navItems: NavItems[] = [
    { label: 'Home', route: '/' },
    { label: 'Launches', route: '/launches' }
  ];

  constructor(private navService: NavigationService) {}

  ngOnInit(): void {
    this.showSideNav = this.navService.getShowNav();
  }

  onSidebarClose() {
    this.navService.setShowNav(false);
  }

  getSideNavBarStyle(showNav: boolean) {
    let navBarStyle: any = {};

    navBarStyle.transition =
      this.direction +
      ' ' +
      this.duration +
      's, visibility ' +
      this.duration +
      's';
    navBarStyle.width = this.navWidth + 'px';
    navBarStyle[this.direction] = (showNav ? 0 : this.navWidth * -1) + 'px';

    return navBarStyle;
  }

  onNavigationSelection(navItem: NavItems) {
    this.navService.goTo(navItem.route);
  }
}

interface NavItems {
  label: string;
  route: string;
}
