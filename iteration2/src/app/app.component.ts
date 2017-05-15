import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="container">
            <h1> {{ title }} </h1>
            <img src="{{ img }}"/>
            <p> {{ content }} </p>
            <hr>
            <app-comments></app-comments>
        </div>
    `,
    styles: ['img { width: 500px; height: auto; } .container{margin-left: 30%; width:600px;}']

})
export class AppComponent {
    title:   string = 'Welcome to this post!!';
    content: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    img: string ='https://i.ytimg.com/vi/vz_sWZAqeVw/maxresdefault.jpg'
}
