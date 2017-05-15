import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> Venezuela </h1>
    <div class='col-sm-6 col-md-4'>
      <img src="https://miviaje.com/wp-content/uploads/2016/04/shutterstock_355535438.jpg">
      <h3>Los Roques</h3>
    </div>
    <div class='col-sm-6 col-md-4'>
      <img src="http://cdn.noticiaaldia.com.s3.amazonaws.com/wp-content/uploads/2016/09/Cs_eOPsXgAQLb95.jpg">
      <h3>Tucacas</h3>
    </div>
    <div class='col-sm-6 col-md-4'>
      <img src="http://www.turismoenaragua.com.ve/wp-content/uploads/2014/06/cuyagua2.jpg">
      <h3>Cuyagua</h3>
    </div>
  `,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Summer is comming!';
}
