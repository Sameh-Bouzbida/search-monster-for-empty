import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterTypeProperties } from '../../utils/monster.utils';

@Component({
  selector: 'app-playing-card',
  imports: [], // Pas d'importation de composants supplémentaires pour l'instant
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent implements OnChanges {
  
  // Propriété d'entrée permettant de recevoir un monstre depuis un composant parent
  @Input() monster = new Monster();
  
  // Icône représentant le type du monstre (par défaut, celui du type électrique)
  monsterTypeIcon: string = "assets/img/electric.PNG";
  
  // Couleur de fond associée au type du monstre (par défaut, celle du type électrique)
  backgroundColor: string = "rgb(255, 255, 104)";

  /**
   * Détecte les changements sur la propriété d'entrée `monster`.
   * Si le type du monstre change, met à jour l'icône et la couleur de fond.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['monster']) { // Vérifie si un changement a eu lieu sur la variable `monster`
      // Vérifie si le type du monstre a changé par rapport à l'ancienne valeur
      if (changes['monster'].previousValue?.type != changes['monster'].currentValue.type) {
        // Met à jour l'icône et la couleur de fond en fonction du nouveau type du monstre
        this.monsterTypeIcon = MonsterTypeProperties[this.monster.type].imageUrl;
        this.backgroundColor = MonsterTypeProperties[this.monster.type].color;
      }
    }
  }
}
