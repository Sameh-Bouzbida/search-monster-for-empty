import { Component } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';

import { MonsterType } from './utils/monster.utils';

@Component({
  selector: 'app-root',
  standalone: true, // Indique que ce composant est autonome (standalone)
  imports: [PlayingCardComponent], // Importe les composants enfants nécessaires
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  monsters!: Monster[]; // Tableau contenant la liste des monstres
  

  selectedMonsterIndex = 0; // Index du monstre actuellement affiché

  constructor() {
    this.monsters = []; // Initialisation du tableau des monstres

    // Création du premier monstre
    const monster1 = new Monster(); 
    monster1.name = "Pik";
    monster1.hp = 40;
    monster1.figureCaption = "N°002 Pik";
    this.monsters.push(monster1); // Ajout du monstre à la liste

    // Création du second monstre
    const monster2 = new Monster(); 
    monster2.name = "Car";
    monster2.image = "assets/img/car.PNG";
    monster2.type = MonsterType.WATER;
    monster2.hp = 60;
    monster2.figureCaption = "N°003 Car";
    this.monsters.push(monster2); // Ajout du monstre à la liste
  }

  

  // Change le monstre affiché en passant au suivant dans la liste
  toggleMonster() {
    this.selectedMonsterIndex = (this.selectedMonsterIndex + 1) % this.monsters.length;
  }
}
