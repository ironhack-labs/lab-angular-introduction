import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-article',
  templateUrl: './photo-article.component.html',
  styleUrls: ['./photo-article.component.css']
})
export class PhotoArticleComponent implements OnInit {
  title: string = "Sobre nosaltres..."
  description: string = "Plataforma sense ànim de lucre on oferim articles sobre llocs que no et pots perdre de Catalunya. Cada proposta ha estat contrastada i agraïm els vostres comentaris"
  image: string = "./../../assets/img/house-town-village.jpg"

  constructor() { }

  ngOnInit() {

  }

}
