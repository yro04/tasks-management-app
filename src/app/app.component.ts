import { Component, OnInit, isDevMode } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){
    if (environment.enableLogging) {
      console.log('Task Management app started');
    }
  }

  title = 'Task Management';

  ngOnInit() {
    if (isDevMode()) { 
      console.log('Development!');
    } else {
      console.log('Production!');
    }
  }
}