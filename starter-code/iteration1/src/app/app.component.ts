import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'The Three Wise Monkeys';
  images : Array<Object> = [ 
    {
      imgTitle: 'See no Evil',
      imgUrl: 'https://cdn.shopify.com/s/files/1/1061/1924/products/See_No_Evil_Monkey_Emoji_large.png?v=1480481037'
    }, 
    {
      imgTitle: 'Hear no Evil',
      imgUrl: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Hear_No_Evil_Monkey_Emoji_large.png?v=1480481036'
    },
    {
      imgTitle: 'Speak no Evil',
      imgUrl: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Speak_No_Evil_Monkey_Emoji_large.png?v=1480481037'
    }
  ];
}
