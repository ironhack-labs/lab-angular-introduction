import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  comments:Array<Object> = [
    {
      title: "id labore ex et quam laborum",
      date: new Date(),
      body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      title: "quo vero reiciendis velit similique earum",
      date: new Date(),
      body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
      title: "odio adipisci rerum aut animi",
      date: new Date(),
      body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
      title: "alias odio sit",
      date: new Date(),
      body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
      title: "vero eaque aliquid doloribus et culpa",
      date: new Date(),
      body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    },
    {
      title: "et fugit eligendi deleniti quidem qui sint nihil autem",
      date: new Date(),
      body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
    },
    {
      title: "repellat consequatur praesentium vel minus molestias voluptatum",
      date: new Date(),
      body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
    },
    {
      title: "et omnis dolorem",
      date: new Date(),
      body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
    },
    {
      title: "provident id voluptas",
      date: new Date(),
      body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
    },
    {
      title: "eaque et deleniti atque tenetur ut quo ut",
      date: new Date(),
      body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
    },
    {
      title: "fugit labore quia mollitia quas deserunt nostrum sunt",
      date: new Date(),
      body: "ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea"
    },
    {
      title: "modi ut eos dolores illum nam dolor",
      date: new Date(),
      body: "expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit"
    }
  ]

  commentForm: Object = {
    formTitle:String= "Add your coment",
    buttonName:String= "Comment"
  }
  constructor() { }

  ngOnInit() {
  }

}
