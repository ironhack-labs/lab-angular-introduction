import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  article: object = {
      title: 'Learn How to Code with Ironhack',
      image:  "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.suiteprado.com%2Fimg%2Ftop%2Fsuitepradohomelg.jpg&f=1",
      description : `Python is a general purpose language. It is huge with Linux and the open source world, but developers use it for all sorts of projects. Python is known for being simple, straightforward, and logical. The Python way of doing things is often referred to as the “Zen of Python” because everything is usually calm and clear. Python has very few strange idiosyncrasies.
                      In the web development world, Python powers some of the largest sites in the world. Interestingly enough, it never gained as widespread adoption as the likes of Ruby and PHP.
                      Several great frameworks like Django, Flask, and Pyramid are built with Python. Like the language itself, they tend to value explicit configuration.`
  }
}
