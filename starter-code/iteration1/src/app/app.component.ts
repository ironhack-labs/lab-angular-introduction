import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  albums = [
    {
      name: "IronHack Pt. 1",
      photo: 'https://famwaterjet.com/wp-content/uploads/2014/10/FAM_logo.png'
    },
    {
      name: 'Fam Pt.2',
      photo: 'https://techsalesgroup.files.wordpress.com/2015/12/ironhack-1-np.jpg?w=450'
    },
    {
      name: 'Wassup we out hea makin angular albums',
      photo: 'http://soundofboston.com/wp-content/uploads/2015/03/Streight-Angular-Messenger.jpg'
    }
  ]
}
