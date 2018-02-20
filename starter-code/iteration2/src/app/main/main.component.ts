import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'Learn how to code in Ironhca';
  image = 'http://via.placeholder.com/650x350';
  description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis corporis sapiente quod. Magnam natus officia nostrum, totam expedita consequatur recusandae eos nesciunt? Autem accusantium, quis soluta tempora suscipit cumque, sapiente ex dolor officia expedita, labore nobis pariatur in placeat veniam sit? Illum nesciunt, harum magnam eos porro officiis! Consequuntur libero officia voluptas fugit quidem, animi aut quos. Aperiam, quia! Culpa, minus hic mollitia ducimus sit debitis consectetur aperiam, aspernatur blanditiis dicta architecto ab magni laboriosam alias eaque, id officia dolorem beatae. Officiis nam distinctio sed nemo beatae natus dolore mollitia ipsa vel? Nemo amet inventore neque accusamus hic omnis magni.';
 
  constructor() { }

  ngOnInit() {
  }
}
