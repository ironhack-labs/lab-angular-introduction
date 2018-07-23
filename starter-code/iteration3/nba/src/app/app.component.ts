import { Component } from '@angular/core';
import { ChampionshipComponent } from './championship/championship.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  championship = ChampionshipComponent;
}
