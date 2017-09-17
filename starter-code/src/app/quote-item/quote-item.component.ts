import { Component, OnInit, OnDestroy, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit, OnDestroy, OnChanges {
  @Input() quote: any;
  @Output() onDelete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit: quote-item component');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: quote-item component');
  }

  ngOnChanges(change) {
    console.log('ngOnChanges: quote-item component', change);
  }

  onQuoteDelete () {
    this.onDelete.emit(this.quote.id);
  }


}
