import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title: string = "Uplifting story here"
  imagePath: string = "/assets/images/ditchworldnews.jpeg"
  content: string = "Early this morning, a man.."
  secretPhrase: string = "Super Secret"



  
  constructor() { }
  ngOnInit() {
  }
  sayHi(arg:string):void{
    console.log(arg)
  }


}
