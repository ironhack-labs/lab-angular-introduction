import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-component",
  templateUrl: "./main-component.component.html",
  styleUrls: ["./main-component.component.css"]
})
export class MainComponentComponent implements OnInit {
  constructor() {}

  content: object = {
    title: "Learn to code with Ironhack",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Gran_V%C3%ADa_%28Madrid%29_42.jpg",
    text: `Lorem ipsum dolor sit amet, dictas scaevola euripidis vel ut, vis quodsi denique consetetur ea. Porro eirmod eloquentiam
    no cum. Has no epicuri pertinax, eam nostro nostrud torquatos no. An nec paulo putent conceptam. An eum aeterno feugiat,
    ut nec audire saperet honestatis, tale sonet deterruisset eam at. Cu rebum sanctus vituperatoribus duo, mei ei paulo labitur
    blandit.`
  };

  ngOnInit() {}
}
