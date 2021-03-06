import { SearchPlace } from "../../types/search/SearchPlace";

const PLACES: SearchPlace[] = [
  {
    slug: 'mizube',
    text: 'γΏγγΉ',
    icon: 'π³',
    pokemonTypeIds: [10]
  }, {
    slug: 'kusamura',
    text: 'γγγγ',
    icon: 'π±',
    pokemonTypeIds: [4, 6, 11, 17]
  }, {
    slug: 'yukiyama',
    text: 'γγγγΎ',
    icon: 'β',
    pokemonTypeIds: [14, ]
  }, {
    slug: 'mori',
    text: 'γγ',
    icon: 'π²',
    pokemonTypeIds: [3, 6, 11]
  }, {
    slug: 'sora',
    text: 'γγ',
    icon: 'β',
    pokemonTypeIds: [2, 15]
  }, {
    slug: 'doukutsu',
    text: 'γ©γγγ€',
    icon: 'π',
    pokemonTypeIds: [5, 7, 8, 4, 16]
  }, {
    slug: 'heichi',
    text: 'γΈγγ‘',
    icon: 'π΄',
    pokemonTypeIds: [0, 1, 9, 12]
  }, {
    slug: 'machi',
    text: 'γΎγ‘',
    icon: 'π«',
    pokemonTypeIds: [0, 1, 13]
  }
]
export default PLACES;