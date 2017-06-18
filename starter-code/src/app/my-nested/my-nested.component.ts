import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-nested',
  templateUrl: './my-nested.component.html',
  styleUrls: ['./my-nested.component.css']
})
export class MyNestedComponent {
title = 'Blogs & Comments';
article: { title: string, img: string, des:string};

  constructor() {
this.article = {
  title: 'Learning to Code with Ironhack',
  img: '../assets/images/luke-chesser-49.jpg',
  des: 'LLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum scelerisque ipsum, non luctus magna facilisis non. Sed interdum augue sagittis ligula tincidunt, vel facilisis diam egestas. Sed eu pretium augue. Ut pharetra ex a facilisis scelerisque. Duis a interdum nibh. Sed ac quam quis diam lobortis suscipit. Sed ante dui, ultrices nec sem viverra, accumsan molestie eros. Aliquam non nulla faucibus, ornare risus ac, vulputate velit. Morbi orci leo, malesuada quis eleifend vel, lobortis vel eros.Aliquam urna dolor, vulputate sed lacinia ac, aliquet id sapien. Cras sit amet felis sit amet turpis aliquam hendrerit ut vitae lorem. Fusce eleifend dui feugiat leo suscipit, vel tempor metus rhoncus. Vestibulum fringilla, purus vel porta vulputate, velit sem venenatis urna, fermentum finibus nisl mi in enim. Aenean vulputate pellentesque enim, et consequat diam aliquet a. Praesent at nulla sollicitudin, scelerisque risus vel, vulputate diam. Donec quis pharetra sem, in commodo tortor.'

}

  }

  ngOnInit() {
  }

}
