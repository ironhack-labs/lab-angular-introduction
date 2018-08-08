import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration1',
  templateUrl: './iteration1.component.html',
  styleUrls: ['./iteration1.component.css']
})
export class Iteration1Component implements OnInit {

  picture1: Object = {
    source:"https://0.soompi.io/wp-content/uploads/2017/02/20064940/bts-not-today-mv-2.jpg",description:"NOT TODAY"}

  picture2: Object = { source:"https://0.soompi.io/wp-content/uploads/2018/07/26025503/BTS-6-2.jpg",description:"MIC DROP"}

  picture3: Object = { source:"https://assets.teenvogue.com/photos/5adf3724722faa3f528ada13/3:2/w_1200,h_630,c_limit/bts-fb.jpg",
    description:"DNA"}
  
  ngOnInit() {
  }

}
