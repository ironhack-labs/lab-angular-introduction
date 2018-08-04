import { Component, } from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

interface GalleryObject {
  asset: SafeUrl;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(  private san: DomSanitizer, ) {}

  title = 'Gallery';
  gallery: GalleryObject[] = [
    {asset: this.getSantizeUrl('/assets/r8tJuL5.jpg'), name: 'Be Kind!'},
    {asset: this.getSantizeUrl('/assets/hSVFuzr.jpg'), name: 'True Love!'},
    {asset: this.getSantizeUrl('/assets/bCkM6cs.jpg'), name: 'We Weird!'},
  ];

  public getSantizeUrl(url: string) {
    return this.san.bypassSecurityTrustUrl(url);
  }


}
