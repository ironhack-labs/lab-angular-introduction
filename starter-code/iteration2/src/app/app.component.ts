import { Component } from '@angular/core';

import { Article } from './article/Article';
import { Comment } from './comments/Comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MonkeyBlog';
  articles: Array<Article> = [
    article1
  ];
}

let article1 = new Article(
  'Prueba 1', 
  'https://images.unsplash.com/photo-1532314574280-09a03ccbfcd8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8bed4d4f6ac70477bc7c12eb2aa10327&auto=format&fit=crop&w=1050&q=80', 
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum ut nulla sit amet ultricies. Phasellus non eleifend quam. Morbi convallis lectus nibh, non venenatis turpis viverra id. Fusce tristique sem libero, vitae egestas libero hendrerit non. Phasellus laoreet aliquet arcu et facilisis. Donec varius ipsum ac rhoncus elementum. Nunc quis consectetur libero.

  Curabitur mi ex, finibus porttitor blandit at, aliquam vitae est. Vivamus luctus eleifend semper. Nullam placerat, turpis non molestie fringilla, sem urna lacinia neque, ut pharetra risus orci eget nisl. Maecenas sit amet dui et ex elementum feugiat. Duis ac dui in mi condimentum gravida ut vitae odio. Proin sed placerat felis. Aliquam non cursus ligula, eget rhoncus est. Donec sodales, dui non ullamcorper vestibulum, odio lectus placerat sapien, et egestas nulla massa vel sapien. Suspendisse quis pellentesque felis. Suspendisse mollis faucibus ante non varius. Maecenas viverra odio eu feugiat lacinia. Proin in eros ac tellus tempus laoreet eu vel enim. Vestibulum sagittis ex consequat velit sollicitudin ornare. Fusce volutpat mollis rutrum.
  
  In porta malesuada tellus, nec faucibus leo accumsan nec. Duis sit amet ligula pellentesque, euismod mauris dapibus, posuere nulla. Etiam ornare, dui eget cursus tempus, leo nibh pellentesque augue, ac consectetur neque magna id risus. Aliquam commodo neque sit amet nunc gravida finibus. Nam lobortis ut elit eget laoreet. Donec mattis eu turpis ac ultricies. Curabitur molestie diam eu lacinia ultrices. Vestibulum a urna a nibh fringilla eleifend ut eget purus. Morbi convallis enim orci, quis egestas odio sodales ac. Morbi rhoncus blandit elit, in pharetra augue semper sit amet. Fusce varius, diam sit amet lobortis rhoncus, elit libero congue enim, sed congue eros lorem at lorem. Phasellus vitae elementum nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam scelerisque aliquam magna laoreet vestibulum.
  
  Sed at accumsan est, id semper felis. Aenean eu ex lectus. Nulla nunc tortor, ultricies id molestie ut, hendrerit eu urna. Quisque accumsan sem et auctor mattis. Cras nec elit ut risus ullamcorper semper quis sed enim. Vestibulum egestas enim non dolor bibendum, eget faucibus elit sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras nisi libero, sollicitudin eu odio nec, pharetra rhoncus ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin vulputate ac mi ac tincidunt. Praesent elit risus, euismod placerat ipsum quis, venenatis dignissim velit. Integer ut semper odio. Suspendisse viverra ipsum neque, a vulputate sapien tincidunt id.`)
  
article1.addComment(new Comment(
  'MonkeyAndres',
  'Holaaaaaa'
))
