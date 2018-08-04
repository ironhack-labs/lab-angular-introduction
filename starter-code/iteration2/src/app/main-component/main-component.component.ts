import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponent implements OnInit {

  constructor(private san: DomSanitizer) { }
  articleName: string = 'Article Name';
  articleImage: SafeUrl = this.getSantizeUrl('/assets/pexels-photo-531880.jpg');
  articleDetails: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis sem in lacus elementum tempor sed eget purus. Mauris viverra sapien sit amet sem facilisis pretium. Proin sapien urna, maximus sit amet auctor at, mollis et nisi. Cras ut elementum quam, at tincidunt lacus. Aliquam rhoncus eu nibh luctus pulvinar. Vestibulum placerat ac diam a sodales. Curabitur ullamcorper est quam, at porta eros rhoncus sed. Integer diam ligula, condimentum id est at, pharetra dictum arcu. Aenean dapibus non dui a feugiat. Duis rutrum augue lectus, eu semper risus blandit id. Phasellus mattis, erat id maximus vulputate, felis eros feugiat justo, quis fermentum arcu nibh id elit. Duis suscipit tortor at tellus facilisis, nec scelerisque ante porttitor. Nam at ex sed erat ornare lacinia.';

  public getSantizeUrl(url: string) {
    return this.san.bypassSecurityTrustUrl(url);
  }

  ngOnInit() {

  }

}
