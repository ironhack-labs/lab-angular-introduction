import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'The Best Pizza';
  image = '../assets/img/pizza.56599b52f02ac502703bd635d8513fea.jpg'
  description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a dignissim lorem. Ut vitae venenatis est, in sodales arcu. Morbi tortor ipsum, gravida rutrum enim eget, sagittis posuere purus. Duis tincidunt ac risus et elementum. Duis sollicitudin ipsum mauris. Donec id erat at dui consequat scelerisque nec laoreet dolor. Integer odio dui, bibendum a purus sed, tincidunt gravida ligula. Aenean vitae hendrerit orci. Integer sodales maximus odio ac fermentum. Aenean justo nisi, mattis et libero consequat, dictum facilisis est. Vestibulum at neque arcu. Praesent id risus mollis, tincidunt neque ut, eleifend ligula. Cras fringilla sem nibh, sed imperdiet ex faucibus id. Etiam tempus varius efficitur. Praesent pellentesque nulla sem, eu tincidunt odio tristique et.';
}
