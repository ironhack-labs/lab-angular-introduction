import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comments',
  templateUrl: './my-comments.component.html',
  styleUrls: ['./my-comments.component.css']
})
export class MyCommentsComponent implements OnInit {
  comments: Array<any> = [{user: 'Stan Lynch', date: "01/14/2018" ,usercomment: 'Tom Petty\'s music helped me get through some tough times'}, {user: 'Mike Campbell', date: "01/16/2018", usercomment: 'I was fortunate to have seen live in concert since he first started'}, {user: 'Benmont Tench', date: "01/18/2018", usercomment: 'Hopefully he is harmonizing with Howie once again'}];
  constructor() { }

  ngOnInit() {
  }

}
