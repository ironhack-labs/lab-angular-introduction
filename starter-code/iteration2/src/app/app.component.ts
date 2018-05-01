import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'THE MOST FAMOUS JAMAICAN VOCAL GROUPS';

  oneArticle:Article = new Article(
    `The Gaylads`, 
    `http://i2.wp.com/collectorskornernow.com/wp-content/uploads/2014/01/gaylads11.jpg`, 
    `The Gaylads are a Jamaican vocal group. They were one of the top rocksteady vocal groups active in Jamaica between 1963 and 1973.
    The group, formed in Kingston, originally consisted of singers Harris "B.B." Seaton, Winston Delano Stewart and Maurice Roberts; Seaton and Stewart had previously been successful as the duo Winston & Bibby. There would be several line-up changes throughout The Gaylads' ten-year history, with Maurice Roberts remaining the only constant member.
    The Gaylads went on hiatus in 1964, with Seaton performing solo on the cabaret circuit, but they reformed in 1966. The group's early successes were with producer Clement "Coxsone" Dodd at Studio One, and included "Lady in the Red Dress", "Stop Making Love", "You Should Never Do That", and "Don't Say No". Besides recording several hit records, The Gaylads also backed many influential musicians (including Ken Parker, Ken Boothe, and Delroy Wilson) on recordings. In 1968 they moved on to record for Sonia Pottinger and enjoyed further hit singles. They recorded for Leslie Kong in 1969, including the hit single "There's a Fire". Stewart left the group when he emigrated, and Kong's death dealt them a further blow, but they had further success recording for Rupie Edwards in the early 1970s. Seaton also emigrated, leaving Roberts as the only original member...
    `
  );
}

class Article {
  constructor(
    public title: string,
    public imageUrl: string,
    public description: string
  ) { }
}