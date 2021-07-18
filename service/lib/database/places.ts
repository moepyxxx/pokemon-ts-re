import { SearchPlace } from "../../types/search/SearchPlace";

const PLACES: SearchPlace[] = [
  {
    slug: 'hakase',
    text: 'はかせのところ',
    icon: '👤',
    pokemonTypeIds: []
  }, {
    slug: 'mizube',
    text: 'みずべ',
    icon: '🐳',
    pokemonTypeIds: [10]
  }, {
    slug: 'kusamura',
    text: 'くさむら',
    icon: '🌱',
    pokemonTypeIds: [4, 6, 11, 17]
  }, {
    slug: 'yukiyama',
    text: 'ゆきやま',
    icon: '⛄',
    pokemonTypeIds: [14, ]
  }, {
    slug: 'mori',
    text: 'もり',
    icon: '🌲',
    pokemonTypeIds: [3, 6, 11]
  }, {
    slug: 'sora',
    text: 'そら',
    icon: '✈',
    pokemonTypeIds: [2, 15]
  }, {
    slug: 'doukutsu',
    text: 'どうくつ',
    icon: '🌋',
    pokemonTypeIds: [5, 7, 8, 4, 16]
  }, {
    slug: 'heichi',
    text: 'へいち',
    icon: '🚴',
    pokemonTypeIds: [0, 1, 9, 12]
  }, {
    slug: 'machi',
    text: 'まち',
    icon: '🏫',
    pokemonTypeIds: [0, 1, 13]
  }
]
export default PLACES;