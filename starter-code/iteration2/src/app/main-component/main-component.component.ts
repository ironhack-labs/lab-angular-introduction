import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  article:object = {
    title : "Learn How to Code",
    image : "https://thesingle-s.com/wp-content/uploads/2016/10/ciudad-madrid-2.jpg",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus enim, ullamcorper aliquet lacus ut, ornare mattis diam. Vivamus tempus sed odio et scelerisque. Aenean placerat urna ut diam lobortis, sed blandit risus pulvinar. Mauris pulvinar dignissim nisl, eu porttitor libero congue a. Phasellus in sapien risus. Quisque tempus efficitur quam eu mattis. Aenean tellus diam, hendrerit eu nisl sit amet, auctor tempor felis. Fusce risus diam, dictum ut quam nec, viverra molestie arcu. Aliquam accumsan velit ut posuere mattis. Aliquam est quam, porta ut efficitur non, aliquet vel metus. Nam dictum aliquet turpis. Aliquam ornare imperdiet tellus, sit amet bibendum risus ornare quis."
  }
  constructor() { }

  ngOnInit() {
  }

}
