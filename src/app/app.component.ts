import { Component, computed, model} from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // Indique que ce composant est autonome (standalone)
  imports: [CommonModule, PlayingCardComponent, SearchBarComponent], // Importe les composants enfants nécessaires
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  monsters: Monster[] ;
  search = model("");

  filteredMonsters = computed(()=> {
    return this.monsters.filter(monster => monster.name.includes(this.search()));
  })
 
  constructor() {
    
    this.monsters = [];

    // Création et ajout des monstres à la liste
    const monster1 = new Monster(); 
    monster1.name = "Pik";
    monster1.hp = 40;
    monster1.figureCaption = "N°001 Pik";
    this.monsters.push(monster1); // Ajout du premier monstre

    // Création et ajout des monstres à la liste
    const monster2 = new Monster(); 
    monster2.name = "Car";
    monster2.image = "assets/img/car.PNG";
    monster2.type = MonsterType.WATER;
    monster2.hp = 60;
    monster2.figureCaption = "N°002 Car";
    this.monsters.push(monster2); // Ajout du second monstre

    // Création et ajout des monstres à la liste
    const monster3 = new Monster(); 
    monster3.name = "Bulb";
    monster3.image = "assets/img/bulb.PNG";
    monster3.type = MonsterType.PLANT;
    monster3.hp = 40;
    monster3.figureCaption = "N°003 Bulb";
    this.monsters.push(monster3); // Ajout du premier monstre

    // Création et ajout des monstres à la liste
    const monster4 = new Monster(); 
    monster4.name = "Sala";
    monster4.image = "assets/img/sala.PNG";
    monster4.type = MonsterType.FIRE;
    monster4.hp = 60;
    monster4.figureCaption = "N°004 Sala";
    this.monsters.push(monster4); // Ajout du second monstre
 
  }

  
}
