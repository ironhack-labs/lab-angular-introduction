import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app works!";
  arrayPhotos: Array<Object> = [
    {
      src:
        "https://pbs.twimg.com/profile_images/922856272332054528/UB_AjsnV_400x400.jpg",
      description: "Ironhack light blue logo"
    },
    {
      src:
        "http://www.fundacionuniversia.net/wp-content/uploads/2017/09/ironhack_logo.jpg",
      description: "Ironhack dark blue logo"
    },

    {
      src:
        "http://www.franbosquet.com/wp-content/uploads/ironhack_logonegro.png",
      description: "Ironhack black logo"
    }
  ];
}
