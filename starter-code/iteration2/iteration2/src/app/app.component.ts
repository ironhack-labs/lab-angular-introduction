import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bigTitle = 'Learn how to code wiht Ironhack';
  title = 'White House, EPA headed off chemical pollution study';
  image = '../assets/images/photo.jpeg';
  descr = `
  Share on Facebook Share on Twitter
  Scott Pruitt’s EPA and the White House sought to block publication of a federal health study on a nationwide water-contamination crisis,
  after one Trump administration aide warned it would cause a "public relations nightmare," newly disclosed emails reveal.
  The intervention early this year — not previously disclosed — came as 
  HHS' Agency for Toxic Substances and Disease Registry was preparing to 
  publish its assessment of a class of toxic chemicals that has contaminated
   water supplies near military bases, chemical plants and other sites 
  from New York to Michigan to West Virginia.`;
}



