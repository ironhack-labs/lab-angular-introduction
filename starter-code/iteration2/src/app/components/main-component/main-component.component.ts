import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  title: string;
  image: string;
  description: string;

  constructor() {
    this.title = 'Learn how to code with Ironhack';
    this.image = '../assets/barcelona.jpg';
    this.description = 'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. '+ 
    'O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, '+ 
    'quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, '+ 
    'mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. '+ 
    'Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, '+ 
    'e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.'
  }

  ngOnInit() {
  }

}
