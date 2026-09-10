import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-johto-region',
  styleUrl: './johto-region.css',
  templateUrl: './johto-region.html',
})
export class JohtoRegion {
  JohtoGymLeaders = signal([
    { 
      name: 'Falkner', 
      badge: ' Zephyr Badge ', 
      location: 'Violet City',
      type: 'Flying',
      typeColor: 'purple',  
      pokemonteam: [
        {
          name: 'Pidgey',
          type: 'Normal/Flying',
          level: 7
        },
        {
          name: 'Pidgeotto',
          type: 'Normal/Flying',
          level: 9
        }
      ] 
    },

    { 
      name: 'Bugsy', 
      badge: ' Hive Badge ',
      location: 'Azalea Town',
      type: 'Bug',
      typeColor: 'green', 
      pokemonteam: [
        {
          name: 'Metapod',
          type: 'Bug',
          level: 14
        },
        {
          name: 'Kakuna',
          type: 'Bug',
          level: 14
        },
        {
          name: 'Scyther',
          type: 'Bug/Flying',
          level: 16
        }
      ] 
    },

    { 
      name: 'Whitney', 
      badge: ' Plain Badge ', 
      location: 'Goldenrod City',
      type: 'Normal',
      typeColor: 'pink',
      pokemonteam: [
        {
          name: 'Clefairy',
          type: 'Fairy',
          level: 18
        },
        {
          name: 'Miltank',
          type: 'Normal',
          level: 20
        }
      ] 
    },

    { 
      name: 'Morty', 
      badge: ' Fog Badge ', 
      location: 'Ecruteak City',
      type: 'Ghost',
      typeColor: 'purple',
      pokemonteam: [
        {
          name: 'Gastly',
          type: 'Ghost/Poison',
          level: 21
        },
        {
          name: 'Haunter',
          type: 'Ghost/Poison',
          level: 23
        },
        {
          name: 'Gengar',
          type: 'Ghost/Poison',
          level: 25
        }
      ] 
    },

    { 
      name: 'Chuck', 
      badge: ' Storm Badge ', 
      location: 'Cianwood City',
      type: 'Fighting',
      typeColor: 'red',
      pokemonteam: [
        {
          name: 'Primeape',
          type: 'Fighting',
          level: 27
        },
        {
          name: 'Poliwrath',
          type: 'Water/Fighting',
          level: 30
        }
      ] 
    },

    { 
      name: 'Jasmine', 
      badge: ' Mineral Badge ', 
      location: 'Olivine City',
      type: 'Steel',
      typeColor: 'gray',
      pokemonteam: [
        {
          name: 'Magnemite',
          type: 'Electric/Steel',
          level: 30
        },
        {
          name: 'Steelix',
          type: 'Steel/Ground',
          level: 35
        }
      ] 
    },

    { 
      name: 'Pryce', 
      badge: ' Glacier Badge ', 
      location: 'Mahogany Town',
      type: 'Ice',
      typeColor: 'blue',
      pokemonteam: [
        {
          name: 'Seel',
          type: 'Water',
          level: 27
        },
        {
          name: 'Dewgong',
          type: 'Water/Ice',
          level: 29
        },
        {
          name: 'Piloswine',
          type: 'Ice/Ground',
          level: 31
        }
      ]
    },

    { 
      name: 'Clair', 
      badge: ' Rising Badge ',
      location: 'Blackthorn City', 
      type: 'Dragon',
      typeColor: 'blue',
      pokemonteam: [
        {
          name: 'Dragonair',
          type: 'Dragon',
          level: 37
        },
        {
          name: 'Kingdra',
          type: 'Water/Dragon',
          level: 40
        }
      ]
    }

  ]);
}
