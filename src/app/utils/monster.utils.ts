// Définition des différents types de monstres sous forme d'énumération
export enum MonsterType {
    PLANT = "plant",
    ELECTRIC = "electric",
    FIRE = "fire",
    WATER = "water",
}

// Interface définissant les propriétés associées à chaque type de monstre
export interface IMonsterProperties {
    imageUrl: string; // Chemin de l'image correspondant au type du monstre
    color: string; // Couleur associée au type du monstre
}

// Objet associant chaque type de monstre à ses propriétés spécifiques (image et couleur)
export const MonsterTypeProperties: { [key: string]: IMonsterProperties } = {
    [MonsterType.PLANT]: {
        imageUrl: 'assets/img/plant.PNG', // Image pour le type "PLANT"
        color: 'rgba(135, 255, 124)' // Couleur associée au type "PLANT"
    },

    [MonsterType.ELECTRIC]: {
        imageUrl: 'assets/img/electric.PNG', // Image pour le type "ELECTRIC"
        color: 'rgba(255, 255, 104)' // Couleur associée au type "ELECTRIC"
    },

    [MonsterType.FIRE]: {
        imageUrl: 'assets/img/fire.PNG', // Image pour le type "FIRE"
        color: 'rgba(255, 104, 104)' // Couleur associée au type "FIRE"
    },

    [MonsterType.WATER]: {
        imageUrl: 'assets/img/water.PNG', // Image pour le type "WATER"
        color: 'rgba(22, 224, 238)' // Couleur associée au type "WATER"
    },
};
