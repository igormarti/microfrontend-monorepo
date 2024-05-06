import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Auth, AuthLibService } from 'auth-lib';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-principal';
  auth!:Auth|null;
  private authSubscription!: Subscription;

  constructor(private authLibService:AuthLibService, private router:Router){}

  ngOnInit(): void {
    this.authSubscription =  this.authLibService.currentUser$.subscribe((auth:Auth|null) => {
      this.auth = auth
    });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  logOut(){
    this.authLibService.logOut();
    this.router.navigate(['/']);
  }
}
