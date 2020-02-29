import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGaurdService implements CanActivate {

  canActivate(): boolean | Promise<any>| Observable<boolean> {
    return true;
  }
  constructor() { }
}
