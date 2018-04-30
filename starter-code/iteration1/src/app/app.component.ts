import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app works!";
  img = [
    {name: "Iron Man", src: "https://vignette.wikia.nocookie.net/marvel/images/8/8d/44-_Armadura_Bleeding_Edge.jpg/revision/latest?cb=20130713005209&path-prefix=es"},
    {name: "Thor", src: "https://img.bekia.es/articulos/portada/62000/62107-h2.jpg"},
    {name: "Hulk", src: "http://contenidos.enter.co/custom/uploads/2017/10/maxresdefault-1-1.jpg"}
  ];
}
