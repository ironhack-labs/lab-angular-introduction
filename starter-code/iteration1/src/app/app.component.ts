import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Extreme album';
  img1 = {
    src: `https://images.unsplash.com/photo-1504051569746-b952af8e65e7?auto=format&fit=crop&w=1500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D`,
    description: `Skating at Venice`
  };
  img2 = {
    src: `https://images.unsplash.com/photo-1495468710622-4b59f514ca22?auto=format&fit=crop&w=1122&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D`,
    description: `Shreddin pow`
  };
  img3 = {
    src: `https://images.unsplash.com/photo-1438505296047-83ae9945bf15?auto=format&fit=crop&w=1052&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D`,
    description: `Surfs up`
  };
}
