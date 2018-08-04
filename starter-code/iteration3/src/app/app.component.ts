import { Component } from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private san: DomSanitizer) { }

  title = 'iteration3';

  champs: Array<any> = [
    {
      year: '2015-16',
      team: 'Cleveland Cavaliers',
      logo: this.getSantizeUrl('/assets/clev.png'),
      bestPlayer: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R Smith', 'Anderson Varejao']
    },
    {
      year: '2014-15',
      team: 'Golden State Warriors',
      logo: this.getSantizeUrl('/assets/golden.png'),
      bestPlayer: ['Stephen Curry', 'Klay Thompson', 'Draymon Green', 'Andrew Bogut', 'Gestus Ezeli']
    },
    {
      year: '2013-14',
      team: 'San Antonio Spurs',
      logo: this.getSantizeUrl('/assets/spur.png'),
      bestPlayer: ['Tim Duncan', 'Tony Parker', 'Manu Ginobili', 'Kawhi Leonard', 'Tiago Splitter']
    }
  ];

  public getSantizeUrl(url: string) {
    return this.san.bypassSecurityTrustUrl(url);
  }

}
