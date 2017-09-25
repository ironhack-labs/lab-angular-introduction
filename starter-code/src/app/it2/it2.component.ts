import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-it2',
  templateUrl: './it2.component.html',
  styleUrls: ['./it2.component.css']
})
export class It2Component implements OnInit {
Title: String = 'We pressent you Family Guy';
url: String='https://upload.wikimedia.org/wikipedia/en/1/1c/Griffin_family.png';
// tslint:disable-next-line:max-line-length
Description: String= '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."';


  constructor() { }

  ngOnInit() {
  }

}
