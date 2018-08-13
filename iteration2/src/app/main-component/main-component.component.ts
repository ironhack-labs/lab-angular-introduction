import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  title = "Learn how to code with Ironhack"
  picture = "http://arc.aarpinternational.org/Image%20Library/59df69a7-aa3f-4251-bf88-8a619b32647f/Unassigned/brazil.jpg"
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In purus est, sollicitudin scelerisque turpis nec, vehicula vehicula lacus. Phasellus vitae urna id velit eleifend consequat in sit amet nisl. Nulla facilisi. Vestibulum quis metus quis arcu auctor congue. Proin hendrerit eros ac fringilla rutrum. Morbi quis lacinia ex. Morbi ullamcorper purus id orci gravida sodales. Duis eget purus leo. Suspendisse nec tortor a nisl placerat luctus eu quis erat. Phasellus pellentesque luctus luctus. Fusce eu cursus lacus, ac vestibulum nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  
  constructor() { }

  ngOnInit() {
  }

}
