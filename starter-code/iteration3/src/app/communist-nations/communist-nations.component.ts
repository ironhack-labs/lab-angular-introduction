import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-communist-nations",
  templateUrl: "./communist-nations.component.html",
  styleUrls: ["./communist-nations.component.css"]
})
export class CommunistNationsComponent implements OnInit {
  leaders: Array<Leader> = [
    new Leader("Soviet Union", "Joseph", "Stalin"),
    new Leader("Soviet Union", "Vladimir", "Lenin"),
    new Leader("Soviet Union", "Nikita", "Krushchev"),
    new Leader("People's Republic of China", "Mao", "Zedong"),
    new Leader("People's Republic of China", "Deng", "Xiaoping"),
    new Leader("People's Republic of China", "Jiang", "Zemin"),
    new Leader("Democratic People's Republic of Korea", "Kim Il", "Sung"),
    new Leader("Democratic People's Republic of Korea", "Kim Jong", "Il"),
    new Leader("Democratic People's Republic of Korea", "Kim Jong", "Un")
  ];
  nations: Array<Nation> = [
    new Nation(
      "1922-91",
      "Soviet Union",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/State_Emblem_of_the_Soviet_Union.svg/1200px-State_Emblem_of_the_Soviet_Union.svg.png"

      // ["Joseph Stalin", "Vladimir Lenin", "Mikhail Kalinin", "Nikita Krushchev"]
    ),
    new Nation(
      "1949-present",
      "People's Republic of China",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/National_Emblem_of_the_People%27s_Republic_of_China_%282%29.svg/1200px-National_Emblem_of_the_People%27s_Republic_of_China_%282%29.svg.png"
      // ["Joseph Stalin", "Vladimir Lenin", "Mikhail Kalinin", "Nikita Krushchev"]
    ),
    new Nation(
      "1948-present",
      "Democratic People's Republic of Korea",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Emblem_of_North_Korea.svg/1200px-Emblem_of_North_Korea.svg.png"
      //  leaders =["Joseph Stalin", "Vladimir Lenin", "Mikhail Kalinin", "Nikita Krushchev"]
    )
  ];

  constructor() {}

  ngOnInit() {}
}

class Nation {
  constructor(
    public era: string,
    public name: string,
    public imageUrl: string
  ) {}
}

class Leader {
  constructor(
    public nation: string,
    public firstName: string,
    public lastName: string
  ) {}
}
