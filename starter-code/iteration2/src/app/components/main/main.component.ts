import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  articles = [{
    title: "Egypt’s revolution, My life, and My Broken Soul",
    imgPath: "https://cdn-images-1.medium.com/max/2000/1*1ioCMNzc4bDwYbAoQGCRdg.jpeg",
    description: "In July of 2013, my tears fell as the plane took off. For the first time in my life, I was desperate to leave Egypt, despite not knowing when I would be able to return. A few days prior, a military coup had toppled our two-year-old struggling democracy."
  },
  {
    title: "Facts Aren’t Dead. Yet.",
    imgPath: "https://cdn-images-1.medium.com/max/2000/1*FcpHokAB-d8ulDaQTvDXag.jpeg",
    description: "It’s been 18 months since “post-truth” was announced as Word of the Year by Oxford Dictionaries, but the sentiment continues to resonate throughout the world, and in particular, in English-speaking countries. The Anglophone media sphere is still in the throes of a sustained collective freakout."
  },
  {
    title: "How I went from newbie to Software Engineer in 9 months while working full time",
    imgPath: "https://cdn-images-1.medium.com/max/1600/1*wyxuq21keffc5b0d_lMkUw.jpeg",
    description: "Whenever I would start reading a success story, I would immediately look to find the author’s background, hoping it would match mine. I never found someone who had the same background as I did, and most likely mine won’t match yours exactly."
  }
]
  constructor() { }

  ngOnInit() {
  }

}
