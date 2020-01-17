import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

 // Condicion du NgIf
  cacher = true;

  // Creation de mon Objet
  phrase: any ={
    autor: "spider-man",
    bio: "Peter Parker, alias Spider-Man (souvent écrit « Spiderman » de façon erronée), est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par le scénariste Stan Lee et le dessinateur Steve Ditko, le personnage de fiction apparaît pour la première fois dans le comic book Amazing Fantasy"
  };

 
// Creation de mon array de type string
  personnages: string[] =  ['Batman', 'Hulk', 'Iron Man', 'Superman', 'X-Men'];

  constructor() { }

  ngOnInit() {
  }

}
