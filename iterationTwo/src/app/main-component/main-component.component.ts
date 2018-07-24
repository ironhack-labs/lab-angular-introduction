import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor() { }
    title = "Learn how to code with Ironhack";
    img = "http://viajesgram.com/uploads/34173cb38f07f89ddbebc2ac9128303f/images/paris%5B1%5D.jpg";
    description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum labore unde nesciunt provident quidem nihil corrupti consequatur expedita! Sit exercitationem reprehenderit aperiam, eum excepturi voluptate cupiditate nihil accusantium, obcaecati, cum totam autem officia voluptatum officiis suscipit ipsa dolorum unde esse perferendis saepe voluptatibus aliquam tenetur nisi dicta. Sequi, perferendis iste";
  ngOnInit() {
  }

}
