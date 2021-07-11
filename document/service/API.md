# API定義

## ポケモンの一覧取得
- bookpokemon/
  - GET : 一覧の取得
    - request: {
      offset: number
      count: number
    }
    - response: {
      pokemons: SummaryBookPokemon[]
      isNext: boolean
    }

  - :id
    - GET : 詳細の取得
      - request: {
        id: number
      }
      - response: {
        pokemon: BookPokemon
        next: SummaryBookPokemon
        prev: SummaryBookPokemon
      }

## ニュース情報の一覧取得
- news/
  - GET : 最新ニュース一覧の取得
    - request: {
      count: number
    }
    - response: {
      news: SummaryNews[]
      isNext: boolean
    }
  - :id
    - GET : 詳細の取得
      - request: {
        id: number
      }
      - response: {
        pokemon: News
        next: SummaryNews
        prev: SummaryNews     
      }