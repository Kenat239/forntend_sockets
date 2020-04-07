import { Component } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly notifier: NotifierService;

  constructor(
    notifierService: NotifierService
     ) {
       this.notifier = notifierService;
  }
  title = 'frontend';
}
