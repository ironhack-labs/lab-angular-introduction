import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  article: {title: string, url: string, description: string};
  constructor () {
    this.article = {
      title: 'Learn how to code with Ironhack',
      url: 'http://imagenes.lainformacion.com/2017/04/28/educacion/escuelas/programadores-Ironhack-ensenanza-Paris-Madrid_1021409476_127397758_1829x1219.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    };
  }

  ngOnInit() {
  }

}
