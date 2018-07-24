import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ballers',
  templateUrl: './ballers.component.html',
  styleUrls: ['./ballers.component.css']
})
export class BallersComponent   {

 title:string = "Champions"

 arrayOfChampions: Array<any> =[
   {
     year: '2016',
     teamName: 'Cleveland Cavaliers',
     teamLogo: 'https://cdn.shopify.com/s/files/1/1206/8370/products/large_2647_FF2068_large.jpg?v=1492357442',
     bpltitle: 'Best Players',
     bplayers: ['Lebron Jamesmn ', 'Kylie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejao',]
   },{
    year: '2018',
    teamName: 'Golden State Warriors',
    teamLogo: 'http://wwwcdn.howdesign.com/wp-content/uploads/LogoPrimary_300x329.jpg',
    bpltitle: 'Best Players',
    bplayers: ['Stephen Curry', 'Klay Thompson', 'Draymong Green', 'Andrew Bogut', 'Gestus Ezeli']
  },{
    year: '2014',
    teamName: 'San Antonio Spurs',
    teamLogo: 'https://s3.amazonaws.com/freebiesupply/thumbs/2x/san-antonio-spurs-logo.png',
    bpltitle: 'Best Players',
    bplayers: ['Tim Duncan', 'Tony Parker', 'Manu Ginóbili', 'Kawhi Leonard', 'Tiago Splitter']
  },
 ]
  

}
