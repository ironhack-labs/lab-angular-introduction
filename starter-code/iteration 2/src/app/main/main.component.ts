import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title: string = 'Learn to code with ironhack';

  image: string = '/assets/photos/pexels-photo-406014.jpeg'

  description: string = "Don’t get hung up on things that don’t fucking work. Someday is not a fucking day of the week. When you sit down to work, external critics aren’t the enemy. It’s you who you must to fight against to do great fucking work. You must overcome yourself. You are not your fucking work. Never let your guard down by thinking you’re fucking good enough. Learn from fucking criticism. Design as if your fucking life depended on it. Intuition is fucking important. Make your work consistent but not fucking predictable. Respect your fucking craft. Why are you fucking reading all of this? Get back to work. Widows and orphans are terrible fucking tragedies, both in real life and definitely in typography. Remember it’s called the creative process, it’s not the creative fucking moment. Must-do is a good fucking master. Sometimes it is appropriate to place various typographic elements on the outside of the fucking left margin of text to maintain a strong vertical axis."

  constructor() { }

  ngOnInit() {
  }

}
