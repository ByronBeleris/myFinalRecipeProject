import { AuthService } from './auth/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedFeature = 'recipe';
  user: any;

  constructor(private authService: AuthService){}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: ' AIzaSyDT-S__Kw5r14IxAEMrfM6liCgfh10b4tw ',
      authDomain: 'course-project-38263.firebaseio.com'
    });
    // this.user = localStorage.getItem('currentUser');
    console.log('Im first');
    console.log(this.user);
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

    ngOnDestroy(){
      this.authService.destroyUser();
    }
}
