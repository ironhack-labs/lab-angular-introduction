import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  main: Array<Main> = [
    {title:"Lean How to Code with Ironhack", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShA7UKGfcR549aGKvvVCwSm3xEOaHlcxz3wJrlqrsAf7P9eQN4", description:"I was in my 8th grade math class. All year a particular student, known for being a little wacky, had been occasionally pretending to be Pikachu. Some days he would sit there working on stuff and someone would ask him a question or whater and he'd just respond 'Pika? Piiiika CHUU' or any other combination. Well, one day late in the year we are working on our assignment after recieving the lecture and said kid starts making some weird noises. Starts to shake a little bit. At first I thought maybe he was starting to seize, but just as it starts to get frighteningly violent he stops still as a rock and practically shouts "}
  ];

  constructor() { }

  ngOnInit() {
  }

}
class Main {
  title: string;
  image: string;
  description: string
}
