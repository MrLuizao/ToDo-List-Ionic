
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TutorialGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor( private storage: Storage, private router: Router ){}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Promise<boolean>{
      const isComplete = await this.storage.get('tutorialComplete');

      if(!isComplete){
        this.router.navigateByUrl('/tutorial');
      }

    return isComplete;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
