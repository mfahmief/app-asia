import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private showNav$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private router: Router) {}

  getShowNav() {
    return this.showNav$.asObservable();
  }

  setShowNav(showHide: boolean) {
    this.showNav$.next(showHide);
  }

  toggleNavState() {
    this.showNav$.next(!this.showNav$.value);
  }

  isNavOpen() {
    return this.showNav$.value;
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }
}

export enum SideNavDirection {
  Left = 'left',
  Right = 'right'
}
