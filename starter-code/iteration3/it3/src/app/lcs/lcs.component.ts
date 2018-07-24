import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lcs',
  templateUrl: './lcs.component.html',
  styleUrls: ['./lcs.component.css']
})
export class LCSComponent{
  

recentChampions:Array<any>=[
  {
  year: 2017,
  team:'Samsung Galaxy',
  championurl:'https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/thumb/0/04/Samsung_Galaxylogo_square.png/1200px-Samsung_Galaxylogo_square.png?version=275a87635f2084bd631600ae53074bb9',
  bestPlayers:['Lee Sung-jin','Kang Chan-yong','Lee Min-ho','Park Jae-hyeok','Choi Woo-bum']

},
{
  year:2016,
  team:'SKT Telecom T1',
  championurl:'https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/5/59/SK_Telecom_T1logo_square.png?version=2d5adc87ea2f4e0dd57c3010a1a0037d',
  bestPlayers:['Faker','Park Ui-jin','Kang Sun-gu','Lee Sang-ho','Bae Jun-sik']

},
{
  year:2015,
  team:'SKT Telecom T1',
  championurl:'https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/5/59/SK_Telecom_T1logo_square.png?version=2d5adc87ea2f4e0dd57c3010a1a0037d',
  bestPlayers:['Faker','Park Ui-jin','Kang Sun-gu','Lee Sang-ho','Bae Jun-sik']

}
  

]

}
