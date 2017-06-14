import { CommentsComponent } from '../comments/comments.component'

export class Main {
  title: string;
  src: string;
  description: string;

  constructor(title: string, src: string, description: string) {
    this.title = title;
    this.src = src;
    this.description = description;
  }

}
