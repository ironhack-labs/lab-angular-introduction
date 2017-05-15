import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments = [{
    user: "Michelangelo",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis felis nibh. Cras non tristique dolor. Praesent ac consequat neque, vehicula venenatis sem. Maecenas id lacinia mauris, non fermentum enim. Sed quis mattis ex, nec dapibus odio. Maecenas suscipit sapien in ante efficitur, eu egestas tortor bibendum. Curabitur lobortis convallis facilisis. Duis vulputate sodales tempor. Etiam erat eros, pharetra non tortor sed, aliquam tempus nisi. Sed lacus sapien, porttitor et purus eget, auctor mattis felis. Duis at odio nec ex malesuada interdum pulvinar tristique arcu."
  },
    {
      user: "Leonardo",
      comment: "Morbi lacus nibh, interdum non euismod aliquet, fermentum sit amet tellus. Suspendisse id ex eget turpis rhoncus egestas. Vivamus id augue sodales, tempus orci eleifend, auctor turpis. Proin ex erat, tincidunt sit amet luctus quis, mollis at ipsum. Fusce pulvinar dui ut ante euismod, posuere volutpat mi cursus. Aenean pulvinar, mauris id venenatis dignissim, ipsum ante sollicitudin magna, vel consectetur turpis orci ac nisl. Praesent quis tellus dapibus, commodo orci eu, sollicitudin nulla. Sed imperdiet dictum lacus at volutpat. Proin sodales nunc consequat diam mattis iaculis. Nunc malesuada elit feugiat luctus hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
  {
      user: "Raffaello",
      comment: "Praesent sodales, ipsum sed posuere vehicula, ipsum lorem interdum turpis, vel varius justo ligula eget tortor. In eget lacinia lacus. Nam nec lobortis neque. Morbi lobortis nisi turpis, semper rhoncus ex venenatis ut. Integer urna neque, vestibulum sed mauris quis, accumsan congue urna. Praesent semper dolor ligula, at consectetur libero consectetur quis. Aenean fringilla velit eget lorem volutpat, in aliquet lacus accumsan. Nam dapibus ipsum in fermentum interdum. Curabitur viverra facilisis sem at sollicitudin.",
  },
  {
    user: "Donatello",
    comment: "Morbi semper dictum pulvinar. Fusce pharetra ornare tincidunt. Etiam nec est arcu. Sed arcu ex, accumsan ut euismod ut, egestas ut est. Ut ligula est, luctus at nulla id, ornare finibus nulla. Mauris commodo sodales mollis. Fusce porta iaculis ex sed auctor. Etiam vitae neque sed dolor elementum suscipit. In tincidunt tincidunt justo, a vestibulum tortor posuere id.",
  }
]
  constructor() { }

  ngOnInit() {
  }

}
