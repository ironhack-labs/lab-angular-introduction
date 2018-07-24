import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-campeones",
  templateUrl: "./campeones.component.html",
  styleUrls: ["./campeones.component.css"]
})
export class CampeonesComponent implements OnInit {
  img1 =
    "https://i.pinimg.com/originals/14/40/e5/1440e5d25320aaa1db1d5907c2a75994.png";

  img2 =
    "https://thumbor.247sports.com/ru9n58CRX0qkHmDjfdgyXmwZEJQ=/0x0/top/Uploads/Assets/878/647/4647878.png";

  img3 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCmWl0pTxjjFhH5EYOP2_mNwcw7G3b_tl9smS9ItrAhigCULa";

  constructor() {}

  ngOnInit() {}
}
