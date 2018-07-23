import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title = 'La Gran vía, qué cosas';
  image = 'https://cdn.traveler.es/uploads/images/thumbs/es/trav/3/s/2016/46/el_letrero_de_schweppes_de_la_gran_via_de_madrid_en_17_curiosidades_3583_940x627.jpg';
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin non leo mollis pellentesque. Nam non mollis felis, eget fringilla urna. Pellentesque laoreet risus consectetur ullamcorper fringilla. Integer et cursus odio. Vestibulum enim magna, rutrum nec bibendum ac, vehicula a neque. Nam id justo eget magna auctor pulvinar. Phasellus sit amet arcu vestibulum, elementum eros cursus, ornare elit. Nulla feugiat pellentesque nulla sed finibus. Sed et lacinia arcu, vitae dignissim sem. Duis luctus bibendum odio a eleifend. Sed et condimentum est, eu suscipit tellus. Integer tempus lorem eu massa tempor, ut placerat magna viverra. Sed et maximus quam. Donec et maximus nisl. Duis hendrerit vulputate sapien et imperdiet. Nam sollicitudin commodo magna, id vulputate metus accumsan vel. Donec id vulputate tortor.';

  constructor() { }
  ngOnInit() {
  }
}
