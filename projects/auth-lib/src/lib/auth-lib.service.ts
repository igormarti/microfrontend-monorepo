import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth } from './models/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthLibService {

  private authSubject = new BehaviorSubject<Auth|null>(null);
  currentUser$ = this.authSubject.asObservable();

  constructor() { }

  public setUser(auth:Auth):void{
    const user:Auth = auth;
    this.authSubject.next(user);
  }

  public getUser(){
    return this.authSubject.value;
  }

  public logOut(){
    return this.authSubject.next(null);
  }
}
