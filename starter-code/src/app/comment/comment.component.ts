import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  constructor() { }
  comments: Array<string> = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quidem voluptatibus doloremque quae. Impedit nulla quas, iste voluptatibus, repellat earum debitis totam? Quam maxime mollitia, dicta nulla, error aliquid quasi!',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam rerum dolore alias doloremque, minima doloribus veniam. Vero alias, officiis distinctio quia, itaque, temporibus earum atque animi tenetur accusantium commodi autem!',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus perferendis, quod blanditiis officiis iusto fuga dolorum corrupti doloribus cumque ad, eum minima voluptas accusantium ullam, nihil, nulla tempore dolores officia.'
  ]
}
