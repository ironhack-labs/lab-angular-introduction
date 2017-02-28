import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app works!';
// }


@Component({
    selector: 'app-root',
    template: `
      <div class="container">
        <div>
            <h1> {{ title1 }} </h1><br>
            <img src="{{ url1 }}" alt=""/>
        </div>
        <div>
            <h1> {{ title2 }} </h1><br>
            <img src="{{ url2 }}" alt=""/>
        </div>
        <div>
            <h1> {{ title3 }} </h1><br>
            <img src="{{ url3 }}" alt=""/>
        </div>
      </div>
    `,
    styles: ['img { width: 500px; height: auto; } .container{margin-left: 30%;}']
})
export class AppComponent {
    title1:   string = 'My first picture';
    url1: string = 'http://www.exposureguide.com/images/landscape-photography/photographing-landscapes-1e.jpg';
    title2:   string = 'My second picture';
    url2: string = 'http://media1.santabanta.com/full1/Outdoors/Landscapes/landscapes-214a.jpg';
    title3:   string = 'My third picture';
    url3: string = 'http://www.photonet.bg/wp-content/uploads/2016/04/Landscape_photography_tips_DCM123.shoot_gearcraft.step1_.jpg';
}
