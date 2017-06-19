import { Component } from '@angular/core';
// import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  title = 'Iteration 2: Articles with Comments';
  articles =
  [
    {
    title: 'Great Whites Breaching in South Africa',
    img: 'http://cape-town.sharkbookings.com/wp-content/uploads/2013/09/tHFgxOYeB8GY1mG7R8YLKBeqpS5we7yYbDeNyPaXewQK7yPeYnNDyT7KPhKByBQLB.jpg',
    description: descriptionText,
    commentList: []
  },
  {
  title: 'Hippo Attacks Photographer',
  img: 'https://c2.staticflickr.com/4/3104/3097805681_0955a86253_b.jpg',
  description: descriptionText,
  commentList: []
},
{
title: 'Elephants Like to Flip Cars for Fun',
img: 'https://metrouk2.files.wordpress.com/2015/07/ad_175654312.jpg',
description: descriptionText,
commentList: []
}
  ];
}

let descriptionText =
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula inlibero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel';
