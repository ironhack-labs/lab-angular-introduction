import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title = "Learn how to code with IronHack";
  img = "https://www.bthetravelbrand.com/contentServer/ContentServer?domain=barcelo&firstImage=true&path=product/PACKAGE/cccb3f8b-11fd-4147";
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis ex sed quam tempus faucibus. Curabitur dictum aliquam massa in aliquam. Aliquam finibus viverra odio, vel congue risus auctor posuere. Nunc commodo sollicitudin tincidunt. Nullam pretium est ut mauris aliquet auctor. In magna justo, consequat at augue nec, vulputate maximus risus. Donec gravida vehicula nulla vel egestas. Quisque vel libero sit amet mi mollis aliquam a eu urna. Vivamus id rhoncus ipsum. Mauris tincidunt eros ut nulla rhoncus luctus. Sed id ipsum eu est blandit tempus.";

  constructor() { }

  ngOnInit() {
  }

}
