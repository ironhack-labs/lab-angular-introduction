import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"]
})
export class CommentsComponent implements OnInit {
  comments: Array<Comment> = [
    new Comment(
      "Mikhail Gorbachev",
      new Date().toLocaleString(),
      "I am a Communist, a convinced Communist! For some that may be a fantasy. But to me it is my main goal."
    ),
    new Comment(
      "Frank Zappa",
      new Date().toLocaleString(),
      "Communism doesn't work because people like to own stuff."
    ),
    new Comment(
      "Karl Marx",
      new Date().toLocaleString(),
      `The bourgeoisie, wherever it has got the upper hand, has put an end to all feudal, patriarchal, idyllic relations. It has pitilessly torn asunder the motley feudal ties that bound man to his 'natural superiors,' and has left remaining no other nexus between man and man than naked self-interest, callous 'cash payment.' It has drowned the most heavenly ecstasies of religious fervor, of chivalrous enthusiasm, of philistine sentimentalism, in the icy water of egotistical calculation. It has resolved personal worth into exchange value, and in place of the numberless indefeasible chartered freedoms, has set up that single, unconscionable freedom—Free Trade. In one word, for exploitation, veiled by religious and political illusions, it has substituted naked, shameless, direct, brutal exploitation.

      The bourgeoisie has stripped of its halo every occupation hitherto honored and looked up to with reverent awe. It has converted the physician, the lawyer, the priest, the poet, the man of science, into its paid wage laborers.
      
      The bourgeoisie has torn away from the family its sentimental veil, and has reduced the family relation to a mere money relation.`
    ),
    new Comment(
      "Donald (THE D.) Trump",
      new Date().toLocaleString(),
      "tl:dr, sad"
    )
  ];

  constructor() {}

  ngOnInit() {}
}

class Comment {
  constructor(
    public title: string,
    public timeStamp: string,
    public body: string
  ) {}
}
