import { Component, OnInit } from '@angular/core';
// import * as firebase from 'firebase';

import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService,
    private loggingService: LoggingService) { }
  // loadedFeature = 'recipe';

  ngOnInit() {
    // firebase.initializeApp({
    //   apiKey: "AIzaSyBqi90f9DrkzzpaXyCTtUxkoVTurQmMyPo",
    //   authDomain: "ng-recipe-book-1346d.firebaseapp.com"
    // });
    this.authService.autoLogin();
    this.loggingService.printLog('Hello from AppComponent ngOnInit');
  }

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
}
