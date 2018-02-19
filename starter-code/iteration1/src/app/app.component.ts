import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "Dabbing unicorn";
  imgUrl: string = "https://res.cloudinary.com/teepublic/image/private/s--OqMrefCa--/t_Preview/b_rgb:c7c7c7,c_limit,f_jpg,h_630,q_90,w_630/v1494469473/production/designs/1595608_1.jpg";
  tittle1: string = "homer con Binoculares";
  imgUrl1: string = "https://cdn.cnn.com/cnnnext/dam/assets/141216183300-simpsons-25-anniversary-image-4-horizontal-large-gallery.jpg";
  tittle2: string = "Trolling Face";
  imgUrl2: string = "http://i0.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg"
}
