import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
  champions=[{year:12,champion:"Mateo",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6TgtyT9F0KrqFgCa0471vlrk3L5rN-HDZOBZWyVHUNhY5csfV",bestPlayers:["Mateo","jagger","dormir"]},{year:45,champion:"ES HIPERACTIVO",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObaLgKobwR26PjRF6yiGpt454CyWVwpi1wHA5nE43iy5M-dJ0Og",bestPlayers:["Mateo","jagger","dormir"]},{year:32,champion:"LA OSTIA",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYGV1JCBEV1i9fthsPfgCEFszkxDwgbmpsYXat3kN-yShgCeccQ",bestPlayers:["Mateo","jagger","dormir"]}]
  constructor() { }

  ngOnInit() {
  }

}
