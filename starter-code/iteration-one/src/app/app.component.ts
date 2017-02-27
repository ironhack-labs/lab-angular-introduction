import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
      <div>
        <h1> {{title}} </h1>
        <p> {{ description}} <p>
        <img src ={{url}}>
      </div>
      <div>
        <h1> {{title2}} </h1>
        <p> {{ description2}} <p>
        <img src ={{url2}}>
      </div>
      <div>
        <h1> {{title3}} </h1>
        <p> {{ description3}} <p>
        <img src ={{url3}}>
      </div>
  `
})
export class AppComponent {
  title = 'Potato';
  description = "It's a potato.";
  url = "http://farmcareltd.com/wp-content/themes/farmcare/_assets/img/what-we-do/potato.png";
  title2 = 'Sweet Potato';
  description2 = "It's a Sweet potato";
  url2 = 'http://www.3fit.co.uk/uploads/sweet-potato.jpg';
  title3 = 'Mr.Potato';
  description3 = "It's Mr.Potato";
  url3 = 'http://vignette2.wikia.nocookie.net/disney/images/2/26/Mr._Potato_Head.png/revision/latest?cb=20160214155918';
}
