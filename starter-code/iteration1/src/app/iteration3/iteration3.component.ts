import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration3',
  templateUrl: './iteration3.component.html',
  styleUrls: ['./iteration3.component.css']
})
export class Iteration3Component implements OnInit {

  constructor() { }
  championships : Array<Object> = [

              {year: "2013-14",
              img :"http://armstrongonewire.com/sites/Portals/1/cleveland-cavaliers-logo-vector.png",
              besttext: "Best Players",
              bestplayers: ["Lebron James","Kyrie Irving","Kevin Love"]},
              {year: "2015-16",
              img :"http://images.contentful.com/a4rx79jcl3n1/2N9qqpVHvqsQoisAAgAeGE/8ad3772823f592851acd87193b9a910f/logo-gsw-primary-blue.svg",
              besttext: "Best Players",
              bestplayers: ["Stephen Curry","Klay Thompson","Andrew Bogut"]
              },
              { year: "2016-17",
              img :"http://cdn.bleacherreport.net/images/team_logos/328x328/san_antonio_spurs.png",
              besttext: "Best Players",
              bestplayers: ["Tim Duncan","Tony Parker","Manu Ginobili"]
              }
  ];
  ngOnInit() {
  }

}
