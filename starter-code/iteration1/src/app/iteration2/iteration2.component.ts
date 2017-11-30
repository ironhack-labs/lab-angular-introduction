import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration2',
  templateUrl: './iteration2.component.html',
  styleUrls: ['./iteration2.component.css']
})
export class Iteration2Component implements OnInit {
  title  : string  = 'Learn how to code with IronHack!';
  img : string ='http://www.telegraph.co.uk/content/dam/Travel/2016/November/madrid-TT-hres-2011_8-xlarge.jpg';
  constructor() { }
  description: string ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla libero erat, malesuada in laoreet a, dapibus non metus. Etiam commodo consequat fringilla. Aliquam dignissim ac risus at viverra. Quisque ultrices felis sed nibh imperdiet, sed ultrices arcu luctus. Integer lacinia feugiat nisl, fermentum luctus ligula. Praesent ligula enim, varius ultricies dolor ac, ornare dictum lorem. Nunc maximus magna eget odio molestie, et posuere ex lacinia. Fusce ut posuere urna. Donec eu maximus magna. Aenean lacinia varius nisl, facilisis interdum nibh posuere ut. Cras sit amet mi dolor. Fusce laoreet faucibus velit, et scelerisque nisi tristique id.';
  commentsection : string = "Comments";
  review : Array<Object> = [
    {
      username: "bob"
    },
    {
      date: "15th November 2017"
    },
    {
      text: "OMG it's really amazing - Donec pulvinar ante quis tempus vulputate. In et magna quis orci pretium porta. Vestibulum vehicula nunc lacus. Proin cursus tortor sed diam vulputate, sit amet placerat nisl vulputate. Nulla at felis pharetra, pretium nisi id, commodo nibh. Nulla augue purus, elementum ac rutrum ac, volutpat sed nisl."
    },
    {
      username: "Lydia"
    },
    {
      date: "10th November 2017"
    },
    {
      text: "superbe - Donec pulvinar ante quis tempus vulputate. In et magna quis orci pretium porta. Vestibulum vehicula nunc lacus. Proin cursus tortor sed diam vulputate, sit amet placerat nisl vulputate. Nulla at felis pharetra, pretium nisi id, commodo nibh. Nulla augue purus, elementum ac rutrum ac, volutpat sed nisl."
    },
  ];
  ngOnInit() {
  }

}
