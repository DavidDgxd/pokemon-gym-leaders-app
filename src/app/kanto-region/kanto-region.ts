import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-kanto-region',
  styleUrl: './kanto-region.css',
  templateUrl: './kanto-region.html',
})
export class KantoRegion {
  KantoGymLeaders = signal([
    { 
      name: 'Brock', 
      badge: ' Boulder Badge ', 
      location: 'Pewter City',  
      pokemonteam: [
        {
          name: 'Onix',
          type: 'Rock/Ground',
          level: 12
        },
        {
          name: 'Geodude',
          type: 'Rock/Ground',
          level: 10
        }
      ] 
    },

    { 
      name: 'Misty', 
      badge: ' Cascade Badge ',
      location: 'Cerulean City', 
      pokemonteam: [
        {
          name: 'Staryu',
          type: 'Water',
          level: 18
        },
        {
          name: 'Starmie',
          type: 'Water/Psychic',
          level: 21
        }
      ] 
    },
    { 
      name: 'Lt. Surge', 
      badge: ' Thunder Badge ', 
      location: 'Vermilion City',
      pokemonteam: [
        {
          name: 'Pikachu',
          type: 'Electric',
          level: 22
        },
        {
          name: 'Raichu',
          type: 'Electric',
          level: 28
        },
        {
          name: 'Magnemite',
          type: 'Electric/Steel',
          level: 25
        }
      ] 
    },

    { 
      name: 'Erika', 
      badge: ' Rainbow Badge ', 
      location: 'Celadon City',
      pokemonteam: [
        {
          name: 'Vileplume',
          type: 'Grass/Poison',
          level: 29
        },
        {
          name: 'Tangela',
          type: 'Grass',
          level: 24
        },
        {
          name: 'Weepinbell',
          type: 'Grass/Poison',
          level: 30
        }
      ] 
    },

    { 
      name: 'Koga', 
      badge: ' Marsh Badge ', 
      location: 'Fuchsia City',
      pokemonteam: [
        {
          name: 'Koffing',
          type: 'Poison',
          level: 37
        },
        {
          name: 'Muk',
          type: 'Poison',
          level: 39
        },
        {
          name: 'Weezing',
          type: 'Poison',
          level: 42
        }
      ] 
    },

    { 
      name: 'Sabrina', 
      badge: ' Soul Badge ', 
      location: 'Saffron City',
      pokemonteam: [
        {
          name: 'Alakazam',
          type: 'Psychic',
          level: 35
        },
        {
          name: 'Kadabra',
          type: 'Psychic',
          level: 38
        },
        {
          name: 'Mr. Mime',
          type: 'Psychic/Fairy',
          level: 40
        }
      ] 
    },

    { name: 'Blaine', 
      badge: ' Volcano Badge ', 
      location: 'Cinnabar Island',
      pokemonteam: [
        {
          name: 'Arcanine',
          type: 'Fire',
          level: 40
        },
        {
          name: 'Rapidash',
          type: 'Fire',
          level: 42
        },
        {
          name: 'Magmar',
          type: 'Fire',
          level: 45
        }
      ]
    },

    { name: 'Giovanni', 
      badge: ' Earth Badge ',
      location: 'Viridian City', 
      pokemonteam: [
        {
          name: 'Rhyhorn',
          type: 'Ground/Rock',
          level: 45
        },
        {
          name: 'Nidoking',
          type: 'Poison/Ground',
          level: 50
        },
        {
          name: 'Dugtrio',
          type: 'Ground',
          level: 48
        }
      ]
    }

  ]);
}
