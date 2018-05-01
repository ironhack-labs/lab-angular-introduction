import { Component } from '@angular/core';

@Component({
  selector: 'app-comment-array',
  templateUrl: './comment-array.component.html',
  styleUrls: ['./comment-array.component.css']
})
export class CommentArrayComponent  {

  title = 'app';
  commentData: Array<object> = [
    {
      fecha: "16/02/2018",
      autor: "Bob Dylan",
      comentario: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      fecha: "13/02/2018",
      autor: "Jennifer Lawrence",
      comentario: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      fecha: "11/02/2018",
      autor: "Michael Jackson",
      comentario: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      fecha: "12/02/2018",
      autor: "Shakira",
      comentario: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      fecha: "19/02/2018",
      autor: "Mariano Rajoy",
      comentario: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    
  ]
    
  

}
