import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <div class="row">
  <div class="col-sm-6 col-md-4">
  <img src="{{imagen1}}"/>
  <div class="caption">
  <caption>{{caption1}}</caption>
  </div>
  </div>
  <div class="col-sm-6 col-md-4">
  <img src="{{imagen2}}"/>
  <div class="caption">
  <caption>{{caption2}}</caption>
  </div>
  </div>
  <div class="col-sm-6 col-md-4">
  <img src="{{imagen3}}"/>
  <div class="caption">
  <caption>{{caption3}}</caption>
  </div>
  </div>
  </div>
  `
})
export class AppComponent {
  title = 'Ironhack Worldwide';
  imagen1 ="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3440/s1200/campus-spotlight-ironhack-paris.png";
  caption1 = "Madrid";
  imagen2 ="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3440/s1200/campus-spotlight-ironhack-paris.png";
  caption2 = "Barcelona";
  imagen3 ="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3440/s1200/campus-spotlight-ironhack-paris.png";
  caption3 = "Paris";
}
