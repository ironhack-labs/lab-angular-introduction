import { Component, OnInit } from '@angular/core';


// let button = document.getElementById('comment');
// button.addEventListener('click',()=>{
//   console.log('ivan')
// });
class comment{
  public name:string;
  public content:string;
  public time: number= Date.now();
  constructor(nam:string,conten:string){

    this.name = nam;
    this.content = conten;
  }

}

let oneComment = new comment('Bobby Table','This course looks so complicated yet the city of paris is beautiful')
let twoComment = new comment('IronHack','It is Super easy we do a pre work and once is completed you will be able to do the whole course')
let arrays:any[]= [oneComment,twoComment];
console.log(arrays)
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
comments:any[] = arrays;
  constructor() { }

  ngOnInit() {
  }

}
