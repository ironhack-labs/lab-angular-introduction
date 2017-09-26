import { Component, OnInit } from '@angular/core';

interface commentObj{
  author:string,
  date:string,
  text:string
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Array<commentObj> = [
    {author: 'Bobby Tables',
     date: '22/03/2017',
     text: 'Nunc erat odio, pulvinar sed rhoncus ut, facilisis a arcu. In hac habitasse platea dictumst. Etiam a nunc pulvinar, pretium risus a, aliquam est. '},
    {author: 'IH School',
     date: '12/08/2017',
     text: ' Aliquam erat volutpat. Nullam consequat gravida rhoncus. Vivamus in quam porta, vulputate lectus nec, hendrerit urna'},
    {author: 'Rita la Cantaora',
    date: '25/09/2017',
    text: 'Ut feugiat dui purus, efficitur pretium quam gravida id'}]

  constructor() { }

  ngOnInit() {
  }

}
