import { Component, OnInit } from '@angular/core';

export class Comment {
  id: number;
  pictureReviewerUrl: string;
  reviewerName: string;
  reviewDate: Date;
  reviewComment: string;
}

const COMMENTS: Comment[] = [
  { id: 1, pictureReviewerUrl: 'https://www.w3schools.com/bootstrap/img_avatar1.png', reviewerName: 'John Doe', reviewDate: new Date, 
    reviewComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna' + 
                   'aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' +
                   'magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  { id: 1, pictureReviewerUrl: 'https://www.w3schools.com/bootstrap/img_avatar2.png', reviewerName: 'Alex Delly', reviewDate: new Date, 
    reviewComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna' + 
                   'aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' +
                   'magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  { id: 1, pictureReviewerUrl: 'https://www.w3schools.com/bootstrap/img_avatar3.png', reviewerName: 'Janice Garcia', reviewDate: new Date, 
    reviewComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna' + 
                   'aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' +
                   'magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]
@Component({
  selector: 'app-the-comments',
  templateUrl: './the-comments.component.html',
  styleUrls: ['./the-comments.component.css']
})
export class TheCommentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  comments = COMMENTS;
}

