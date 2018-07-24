import { Component} from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent {
  title = 'Learn to code with ironhack';
  img = 'https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_1080,q_70,w_1920/v1/clients/vancouverbc/aerial_9286c8f8-5198-4ef6-92c9-f593c0e2f354.jpg'
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod faucibus tristique. Quisque et euismod nunc. Etiam facilisis, velit non tristique finibus, purus dui vehicula sapien, at aliquam felis sapien malesuada ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec pellentesque ut eros vel feugiat. Praesent vitae dapibus massa, eget rhoncus sapien. Donec scelerisque ex et enim fringilla lacinia. Quisque vel lacus consequat, varius justo non, posuere justo. Vestibulum hendrerit, ex quis tincidunt ullamcorper, augue nulla auctor quam, dapibus sodales quam elit eu augue. Cras a purus eget ex aliquet sodales quis et felis. Etiam semper, mauris.'
}
