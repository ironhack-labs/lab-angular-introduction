import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = "Learn some about Miyazaki";
  image = "http://www.nausicaa.net/miyazaki/museum/museum_plan.jpg";
  description = "This Japanese Lorem Ipsum is based on the kanji frequency count at tidraso.co.uk and includes about 50% kanji, 25% hiragana, 20% katakana and 5% roman numerals and punctuation. Katakana and hiragana cluster in strings between 1 to 4 chars at random points in each paragraph. Hiragana occurs more often at the end of sentences, rather in clumps of 1 to 4 chars rather than just single chars. Katakana is very unlikely to appear as a single character in Japanese text, but hiragana could. Exclamation and question marks are not standard ascii ones."
  constructor() { }

  ngOnInit() {
  }

}
