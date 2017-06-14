import { Component, OnInit, Input } from '@angular/core';
import { Championships } from './championships.model'

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {
  @Input() championships: Championships[];

  constructor() {
    this.championships = [
      new Championships([1957, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1968, 1969, 1974, 1976, 1981, 1984, 1986, 2008],
      'Boston Celtics', '../assets/celtics.png', ['Bill Russell', 'Larry Bird', 'John Havlicek']),
      new Championships([1949, 1950, 1952, 1953, 1954, 1972, 1980, 1982, 1985, 1987, 1988, 2000, 2001, 2002, 2009, 2010],
      'Los Angeles Lakers', '../assets/lakers.png', ['Kobe Bryant', 'Magic Johnson', 'Kareem Abdul-Jabbar']),
      new Championships([1991, 1992, 1993, 1996, 1997, 1998],
      'Chicago Bulls', '../assets/bulls.png', ['Michael Jordan', 'Scottie Pippen', 'Jerry Sloan']),
    ]}

  ngOnInit() {
  }

}
