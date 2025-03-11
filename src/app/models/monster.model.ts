import { MonsterType } from "../utils/monster.utils";

// Classe représentant un monstre avec ses différentes propriétés
export class Monster {
    name: string = "My Monster"; // Nom du monstre
    image: string = "assets/img/pik.PNG"; // Image du monstre
    type: MonsterType = MonsterType.ELECTRIC; // Type du monstre (par défaut électrique)
    hp: number = 40; // Points de vie du monstre
    figureCaption: string = "N°001 Monster"; // Légende affichée sous l'image

    // Informations sur l'attaque du monstre
    attackName: string = "Geo Impact"; // Nom de l'attaque
    attackStrength: number = 60; // Dégâts infligés par l'attaque
    attackDescription: string = "This is a long description of a monster capacity. Probably something to do with electricity."; // Description de l'attaque
}
