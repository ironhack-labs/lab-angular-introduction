import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-totoro',
  templateUrl: './totoro.component.html',
  styleUrls: ['./totoro.component.css']
})
export class TotoroComponent implements OnInit {
  image = "https://i2.wp.com/www.tor.com/wp-content/uploads/2017/05/Totoro-Bus-stop-740x399.jpg?resize=740%2C399&type=vertical";
  description = "totoro under the rain";

  constructor() { }
  ngOnInit() { }

}
