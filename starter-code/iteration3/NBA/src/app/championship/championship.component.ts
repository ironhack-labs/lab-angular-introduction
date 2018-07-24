import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css']
})
export class ChampionshipComponent implements OnInit {

  imgNBA1= 'https://i.pinimg.com/originals/14/40/e5/1440e5d25320aaa1db1d5907c2a75994.png';
  imgNBA2= 'https://thumbor.247sports.com/ru9n58CRX0qkHmDjfdgyXmwZEJQ=/0x0/top/Uploads/Assets/878/647/4647878.png';
  imgNBA3= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCmWl0pTxjjFhH5EYOP2_mNwcw7G3b_tl9smS9ItrAhigCULa';

  constructor() { }

  ngOnInit() {
  }
}
