import { Component } from '@angular/core';
import { Article } from '../../shared/models/article.model'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class BlogComponent {

  blog: Array<Article> = [

    {
      title: 'Miles de españoles han seguido levantándose a las seis en plenas vacaciones al ser incapaces de desprogramar el despertador',

      description: 'Las caras de sueño inundan esta semana las oficinas del país ya que la mayoría de los asalariados vuelve al trabajo estos días entre lamentos y bostezos. Pero un año más, la peor parte se la llevan los miles de españoles que han seguido levantándose a las seis de la mañana en plenas vacaciones al ser incapaces de desprogramar el despertador.La Dirección General de Tráfico ha informado de grandes retenciones en las principales ciudades durante todo el mes de agosto. “A las siete de la mañana había atasco por la gente que iba al trabajo empujada por la inercia, y a las ocho había otro de la misma gente que daba la vuelta para volver a casa tras darse cuenta del error”, agregan desde la DGT. El 20% que ha disfrutado de sus vacaciones porque ha sabido desactivar el despertador ha llegado hoy tarde al trabajo al ser incapaz de programarlo de nuevo. Y ni siquiera éstos han podido dormir bien en todas las vacaciones por culpa de los despertadores de sus vecinos. Ahora, todos ellos aprovecharán para recuperar las horas de sueño en la oficina como cada año',
      image: 'https://emtstatic.com/2018/09/iStock-460131651.jpg'
      
    }
  ];

};
