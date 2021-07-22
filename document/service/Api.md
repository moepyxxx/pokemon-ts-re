# API
APIのルールは下記です。NestjsのAPIサーバーへアクセスします。
頭文字に「T」がつくものは、タイプ定義にあるものです。

## bookPokemons

- GET
  - body: {
    offset: number;
    limit: numner;
    filter: TFilter; -- 未実装のため一旦割愛
  }
  - response: TSummaryBookPokemon;

### bookPokemon/:id

- GET
  - response: TBookPokemon;

## types

- GET
  - response: TType[];

### types/:id

- GET
  - body: TType;

## searchplaces
- GET
  - response: TSearchPlace[];

### searchplaces/:id
- GET
  - response: TSearchPlace;

## news
- GET
  - response: TSummaryNews[];

### news/:id
- GET
  - response: TNews[];
  