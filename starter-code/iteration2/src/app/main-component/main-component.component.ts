import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  constructor() { }
  
  ngOnInit() {
  }
  title= 'Learn how to meme with Ironhack';
  img= 'https://media.giphy.com/media/5UCo6K44H3msPIUORS/giphy.gif';
  content = `Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be… Good news, everyone! There's a report on TV with some very bad news!

  That's a popular name today. Little "e", big "B"? Guards! Bring me the forms I need to fill out to have her taken away! Good man. Nixon's pro-war and pro-family. Robot 1-X, save my friends! And Zoidberg!
  
  You can see how I lived before I met you. Fry! Stay back! He's too powerful! You mean while I'm sleeping in it? Have you ever tried just turning off the TV, sitting down with your children, and hitting them?`
}
