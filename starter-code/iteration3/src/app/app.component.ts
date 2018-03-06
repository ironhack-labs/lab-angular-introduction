import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  championships = [
    {
    name: "Miami Heat",
    year: "2016-2017",
    bestplayers: ["Allen, Ray", 'Battier, Shane', "Lewis, Rashard", 'Varnado, Jarvis'],
    championUrl: "https://goodlogo.com/images/logos/miami_heat_logo_3919.png"
    },
    {
    name: "Golden State Warriors",
    year: "2015-2016",
    bestplayers: ["Clark, Ian", 'Jones, Damian', "McCaw, Patrick", 'Pachulia, Zaza'],
    championUrl: "http://www.neosportsinsiders.com/wp-content/uploads/2015/09/Cleveland_Cavaliers_2010.svg_-777x437.png"
    },
    {
    name: "Cleveland Cavaliers",
    year: "2014-2015",
    bestplayers: ["Frye, Channing", 'Kaun, Sasha', "	Smith, J. R.", 'Williams, Mo'],
    championUrl: "https://usatftw.files.wordpress.com/2016/05/logo-golden-state-warriors1.png?w=516&h=504"
    },
  ];
}
