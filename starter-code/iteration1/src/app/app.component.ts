import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pescados azules';
  elements = [
    { src : "http://www.gastrosoler.com/scomber%20scombrus%20de%20fisheris%20no.jpg",
    description: "Caballa"
  },
    {
      src: "http://nebula.wsimg.com/2dcb95354104e747790e271e7a0f6633?AccessKeyId=537BC338081EDE4D9AC4&disposition=0&alloworigin=1",
      description: 'Chicharro Limonero'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Sardina_pilchardus_Gervais.jpg/800px-Sardina_pilchardus_Gervais.jpg',
      description: 'Sardina' 
    }
  ]
}
