import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  data = [
    {
      img: "http://static.alfabetajuega.com/abj_public_files/multimedia/imagenes/alfabetajuega-pepe-the-frog-1-151217.jpg",
      name: "Pepe"
    },
    {
      img: "https://thenib.imgix.net/usq/28158803-0c45-41b1-84c7-424be4a2a981/pepe-the-frog-to-sleep-perchance-to-meme-001-e7cfd2.png?auto=compress,format&cs=srgb&_=e7cfd221930a67d3e9829515285851a7",
      name: "Pepe2"
    },
    {
      img: "https://www.infobae.com/new-resizer/puVJf2fQo74WGka8aYVUOT6PaDI=/600x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/09/28082346/CtY9h13WAAEsNfz.jpg",
      name: "Pepe3"
    }
  ]
}

