import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
title= 'Barcelona';
image='http://botn.info/wp-content/uploads/2017/01/walks-barcelona-1.jpg';
description= 'Barcelona  is the capital city of the autonomous community of Catalonia in the Kingdom of Spain';

  constructor( ) {}

  ngOnInit() {
  }

}
