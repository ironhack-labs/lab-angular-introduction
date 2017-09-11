import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title2 = "Blog - Iteration #2";
  foto2: Object = {
    url: "http://lorempixel.com/600/300/city",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu maximus dolor. Integer eleifend blandit lorem, sit amet sodales orci. Sed efficitur id ante eu dictum. Nam mattis egestas massa a feugiat. Nulla dignissim augue a malesuada sollicitudin. Morbi eu dictum eros. Fusce dignissim facilisis viverra. Curabitur vitae dapibus est. Proin posuere felis id nisl commodo, ac blandit tellus porttitor. Sed arcu ante, tempus sit amet sem quis, lobortis auctor est. Vestibulum tincidunt, nulla in placerat vestibulum, risus turpis sollicitudin dolor, eget sagittis risus quam in ex. Sed ornare, elit vitae varius elementum, elit turpis fermentum urna, quis auctor justo velit vulputate leo."
  }

  ngOnInit() {
  }

}
