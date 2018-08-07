import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.css']
})
export class MyPostComponent implements OnInit {

    post = {
    title: 'Learn how to code with Ironhack',
    PicUrl: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01-400x267.jpg',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus eget orci et accumsan. 
          Vestibulum elementum sodales urna et 
          consequat. Quisque vitae leo non eros scelerisque
          dictum. Integer vehicula tortor quis mi hendrerit rhoncus. 
          Pellentesque imperdiet fermentum sem vel lobortis. 
          Morbi ac purus accumsan, ultrices risus sit amet, pellentesque sem. 
          Donec leo sem, dapibus nec mi tempus, lobortis aliquet nibh. 
          Pellentesque feugiat cursus purus, a auctor augue imperdiet lobortis. 
          Vestibulum consequat tristique ligula at placerat. Suspendisse potenti. 
          Integer vitae urna eu magna sollicitudin suscipit sed nec mi. 
          Donec vehicula justo in purus bibendum, vitae pellentesque dui pharetra. 
          Maecenas lacus mi, pharetra nec velit ut, mollis porttitor erat. 
          Nam vehicula sollicitudin turpis in bibendum. 
          In lacinia eros dui, in maximus orci luctus id.`
};

  ngOnInit() {
  }

}
