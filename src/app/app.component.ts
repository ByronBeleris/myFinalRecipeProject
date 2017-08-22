import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: " AIzaSyDT-S__Kw5r14IxAEMrfM6liCgfh10b4tw ",
      authDomain: "course-project-38263.firebaseio.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
