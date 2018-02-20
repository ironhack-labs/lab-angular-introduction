import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  template: `
    <h1>{{title}}</h1>
    <img src="{{image}}"/>
    <p>{{description}}</p>
    <hr>
    <app-comments-component></app-comments-component>
  `
})
export class AppComponent {
  title = "Learn how to code with Ironhack";
  image = "https://4.bp.blogspot.com/-KA7wneoRGP4/UUsl-0N3-JI/AAAAAAAAPKA/jVYD_DQMaoA/s1600/gran_via-copia%5B1%5D.png";
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non eleifend mauris. Duis non tempor dui, vel malesuada arcu. Mauris lobortis gravida lacus, at consequat tortor scelerisque ac. Etiam non tortor lacinia, maximus ipsum a, gravida urna. Nunc consectetur vel felis in hendrerit. Cras vitae convallis elit. Donec porta varius diam vel malesuada. Sed tellus elit, viverra quis fermentum quis, maximus eu erat. Nullam placerat non lacus ut rutrum. Vivamus fermentum erat vitae risus bibendum pretium. Sed ornare sollicitudin lacus nec imperdiet.";
}
