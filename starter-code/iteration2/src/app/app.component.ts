import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blog: Object = {
    title: 'FALCON 9 (AND DRAGON)',
    // tslint:disable-next-line:max-line-length
    image: 'https://www.gannett-cdn.com/-mm-/91e2de4358e4ef1930a7d27ea4bad232578112bb/c=0-37-2937-1697/local/-/media/2018/05/11/Brevard/Brevard/636616752642732439-crb051118-spacex-10-.jpg',
    // tslint:disable-next-line:max-line-length
    description: `SpaceX has a number of ambitious goals for the next few years. The company plans to increase the pace of its rocket launches, which is already at more than one per month; start flying humans to the ISS and around the Moon; and finish developing and testing the BFR, which would pave the way for the company to achieve Elon Musk’s goal of colonizing Mars. It’s a pretty full slate, but it’s still not the whole picture. For one thing, SpaceX still has to show a lot more of its own work when it comes to the company’s plans for the Moon and Mars. Beyond a few pretty renderings of lunar and Martian bases, we still have no concrete details on how Musk believes he can (let alone will) build these human habitats. He has also often dodged one of the most important questions: how he plans to keep humans alive during extended spaceflight, where radiation is a problem. Large questions remain about how it would even be possible to live on Mars for any extended period of time. And, most importantly, it’s still not totally clear how he would fund the whole effort. It’s also unclear how the recent political shift in America might alter any of these plans. Musk still says his ultimate goal is to make humans an interplanetary species. But Donald Trump recently signed a (vague) policy directive with a renewed focus on the Moon. Both Trump and his vice president Mike Pence offered congratulations to Musk on Twitter after the Falcon Heavy’s success, and Musk was quick to thank each of them. SpaceX owes its success to NASA, which has been a customer since the very beginning. The company obviously hopes that doesn’t change anytime soon. If one thing is certain about where SpaceX goes next, it’s that some (or maybe all) of these plans will change — at least a little. Not only is Elon Musk known for stretching and missing deadlines, but he often tears the plans to shreds. What results from that process, however, can often be something spectacular.`
  };
}
