# API定義

## ポケモンの一覧取得
- bookpokemon/
  - GET : 一覧の取得
    - request: {
      offset: number
      count: number
    }
    - response: {
      pokemons: BookPokemon[]
      isNext: boolean
    }

  - :id
    - GET : 詳細の取得
      - request: {
        id: number
      }
      - response: {
        pokemon: BookDetailPokemon
      }