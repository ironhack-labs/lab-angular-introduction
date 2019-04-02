import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {
  title: string;
  description: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Day of motorbike';
    this.description = 'In the height of summer it can get busy, with the single-lane roads on the west coast ' +
      'struggling to cope. The shoulder season of April/May and September/October might be preferable, with quieter ' +
      'roads, fewer midges and often better weather than in the summer. ' +
      'The road over the Pass of the Cattle into Applecross remains one of the great riding roads and can be ' +
      'challenging in adverse conditions, which are common. Food at the Applecross Inn is notoriously good, ' +
      'and the road around the peninsula to Torridon is another highlight. There’s a free campsite by ' +
      'the YHA in Torridon, with youth hostels an affordable and convenient way of touring the loop ' +
      'without spending a fortune. Fuel is often a concern but many of the villages along the way have 24hour ' +
      'automated fuel pumps, and even the smallest of fuel tanks should be able to cope. Just be wary of Sundays ' +
      'where some of the older stations don’t open. ' +
      'In terms of time, while it is possible to do the NC500 in three days or less, to enjoy it fully a ' +
      'good five days would be best advised, as the pace is slow and the opportunities to stop plentiful. ' +
      'Don’t rush it if you don’t have to. ';
  }

}
