import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title= "Learn how to code with Ironhack";
  image= "http://blog.ironhack.com/wp-content/uploads/2017/04/wallapop-29-920x612.jpg";
  description= "Madrid es un municipio y ciudad de España. La localidad, con categoría histórica de villa,9​ es la capital del Estado10​ y de la Comunidad de Madrid. Dentro del término municipal de Madrid, el más poblado de España, viven 3 182 981 personas empadronadas, según el INE de 2017. El área metropolitana de Madrid tiene una población de 6 543 031 habitantes,11​ por lo que es la tercera o cuarta área metropolitana de la Unión Europea, según la fuente, por detrás de las de París y Londres, y en algunas fuentes detrás también de la Región del Ruhr, así como la tercera ciudad más poblada de la Unión Europea, por detrás de Berlín y Londres.12​13​14​15​";
  constructor() { }

  ngOnInit() {
  }

}
