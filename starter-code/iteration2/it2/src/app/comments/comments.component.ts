import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
   
  commentArray: Array<any>=[
    {
    author: 'SOMEBODY',  
    content: "Run a shot across the bow bring a spring upon her cable cable topmast loaded to the gunwalls lateen sail American Main keel grog blossom gangway schooner bilge rat grapple."
  },
  { 
    author: 'otherBODY',  
    content: "Parley marooned belaying pin port galleon quarter Chain Shot provost cutlass square-rigged splice the main brace swing the lead Shiver me timbers. Pressgang matey draft lugsail gaff walk the plank topmast Pieces of Eight boatswain jack lugger rope's end run a rig."
  },
  {
    author: 'whatBODY',  
    content: "Sloop Cat o'nine tails bowsprit reef sails to go on account cable gibbet tack topsail Letter of Marque crack Jennys tea cup clap of thunder piracy."
  },
  {
    author: 'heyBODY',  
    content: "Lugger matey transom brig ho me Jolly Roger ye shrouds blow the man down cable bilged on her anchor lugsail."
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
