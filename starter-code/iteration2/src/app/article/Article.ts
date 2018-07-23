import { Comment } from "../comments/Comment";

export class Article {
    comments: Array<Comment> = [];
    constructor(
        public title: string,
        public image: string,
        public content: string,
    ){}

    addComment(comment: Comment){
        this.comments.push(comment);
    }
}