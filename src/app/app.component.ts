import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD2yn717GRijwLMjTl57b3zIRiQiur5BzY',
      authDomain: 'ng-recipe-book-c676d.firebaseapp.com'
    });
  }
}
