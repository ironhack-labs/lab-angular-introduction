import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }
    title = `Now, All NBA in your TV`;
    description = `The National Basketball Association (NBA) is the predominant men's professional basketball
    league in North America, and is widely considered to be the premier men's professional basketball league in the world. It has 30 teams (29 in the United States and 1 in Canada), and is an active member of USA Basketball (USAB),
      which is recognized by FIBA (also known as the International Basketball Federation) as the national governing body for
       basketball in the United States. The NBA is one of the four major professional sports leagues in the United States and Canada.
       NBA players are the world's best paid athletes by average annual salary per player.`;
    comments = `Comments`;
    post = `This is another user post`;
  ngOnInit() {
  }

}
