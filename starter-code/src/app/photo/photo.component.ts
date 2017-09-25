import { Component, OnInit } from '@angular/core'

interface photoObj{
  imgSrc:string,
  imgTxt:string
}

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photos: Array<photoObj> = [
    {imgSrc: 'http://blog.ironhack.com/wp-content/uploads/2017/01/best-coding-botcamp-ironhack-student-podcast-blog-header.jpg', imgTxt: 'Primera foto'},
    {imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuLV_uZSLy5sfV3VYc6vOOuXbohZoz0aijSEJq0gEAELd76G_d', imgTxt: 'Segunda foto'},
    {imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShw986smDXGn-XIVSqTdMIPGtGyzPv7_imWlwa29j0LKLCl-RMMw', imgTxt: 'Tercera foto'}]

  constructor() { }

  ngOnInit() {
  }

}
