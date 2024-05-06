import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
    private authSubscription!: Subscription;

    constructor(private authLibService:AuthLibService){
    }

    ngOnInit(): void {
      this.authSubscription =  this.authLibService.currentUser$.subscribe((auth) => console.log(auth));
    }

    ngOnDestroy(): void {
      this.authSubscription.unsubscribe();
    }
}
