import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "My photo Album!";
  gatito1 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrzV9vntmIq_AQB_P235ACfvcuM3GEBWUxp18eRNJb_c1dyLzcQ";
  gatito2 =
    "https://i.pinimg.com/736x/e1/95/d5/e195d5b9e0ecdcdcede6c71e253481f2.jpg";
  gatito3 =
    "http://funnyanimalphoto.com/wp-content/uploads/2013/10/kitten_better_not_real_fur.jpg?bd03d3";
}
