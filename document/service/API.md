# API定義

## ポケモンの一覧取得
- pokemon/
  - GET : 一覧の取得
    - request: {
      offset: number
      count: number
    }
    - response: {
      BookPokemon[]
    }

  - id
    GET : 詳細の取得
      - request: {
        id: number
      }
      - response: {
        pokemon: BookDetailPokemon
      }