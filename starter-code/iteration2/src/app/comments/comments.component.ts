import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  myComments: any[] = [
    {
      name: "Beans",
      comment: "Crash against wall but walk away like nothing happened pee in human's bed until he cleans the litter box, yet eat a plant, kill a hand."
    },
    {
      name: "Momo",
      comment: "Stare at guinea pigs i'm going to lap some water out of my master's cup meow. Love to play with owner's hair tie more napping, more napping all the napping is exhausting but poop in litter box, scratch the walls try to jump onto window and fall while scratching at wall."
    },
    {
      name: "Sassafras",
      comment: "Hopped up on catnip claws in your leg."
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
