import { Component } from '@angular/core';
import { MainComponentComponent } from './main-component/main-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  mainComponent: MainComponentComponent;
}
