import { Component,  computed, input } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterTypeProperties } from '../../utils/monster.utils';

@Component({
  selector: 'app-playing-card',
  imports: [], // Pas d'importation de composants supplémentaires pour l'instant
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent  {
  
  // Propriété d'entrée permettant de recevoir un monstre depuis un composant parent
  monster = input(new Monster());
  
  // Icône représentant le type du monstre (par défaut, celui du type électrique)
  monsterTypeIcon= computed (() => {
    return MonsterTypeProperties[this.monster().type].imageUrl;
  }
);
  
  // Couleur de fond associée au type du monstre (par défaut, celle du type électrique)
  backgroundColor = computed(() => {
    return MonsterTypeProperties[this.monster().type].color;
  });

  
}
