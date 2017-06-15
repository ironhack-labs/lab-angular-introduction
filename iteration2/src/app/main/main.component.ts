import { Component, OnInit } from '@angular/core';


class post {
  public title: string;
  public img: string;
  public describe: string;



  constructor(titl: string,im: string,describ: string){
this.title = titl,
this.img = im,
this.describe = describ
}
}
let FirstPost = new post('Learn How to Code with Ironhack','https://wallpaperscraft.com/image/paris_beautiful_france_eiffel_tower_city_france_25578_1920x1080.jpg','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
newPost:object = FirstPost;
  constructor() { }

  ngOnInit() {

  }

}
