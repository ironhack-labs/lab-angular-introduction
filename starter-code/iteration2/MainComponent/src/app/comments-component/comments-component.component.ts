import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

    title = 'Comments';

    author1:string='whatever';

    arrayOfComments:  Array<any> = [
      {
        username: 'ChrisTHEBeck',
        date: "Mon Jul 23 2018 17:31:16 GMT-0400 (Eastern Daylight Time)",
        text: 'Noodle horse snoot length boy mlem heckin good boys doggo, waggy wags lotsa pats big ol pupper. '
      }, {
        username: 'CoolGirl1',
        date: "Mon Jul 23 2018 17:31:16 GMT-0400 (Eastern Daylight Time)",
        text: 'What a nice floof floofs heckin good boys and girls snoot very hand that feed shibe shooberino, puggo porgo heck.'
      }, {
        username: 'Snoodle',
        date: "Mon Jul 23 2018 17:31:16 GMT-0400 (Eastern Daylight Time)",
        text: 'Pupperino long woofer much ruin diet very hand that feed shibe adorable doggo shoob, very taste wow wrinkler very taste wow.'
      },
    ];
  
    addComment(author, comment, date){
  console.log(author.value, comment.value)
    };
    sayHello(){
      console.log("hello");
    }
  constructor() { }

  ngOnInit() {
  }

}
