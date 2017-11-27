import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My family album';
  photos: Array<Object> = [
    {
      url: "https://metrouk2.files.wordpress.com/2016/11/family-guy-main.jpg",
      description: "The weirdest family ever"
    },
    {
      url: "http://www.todo-hd.com/sites/default/files/famguy_feedingbirds_hires1.jpg",
      description: "Feeding pidgeons at the park"
    },
    {
      url: "https://www.tvinsider.com/wp-content/uploads/2017/09/FamilyGuy_2017GenericArt_R2_3__hires1-1014x570.jpg",
      description: "Shopping with the family"
    }
  ];
}
