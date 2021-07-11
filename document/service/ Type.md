# 型定義
型定義のルールは下記です。
- Propsにしか使わない定義は、そのコンポーネントの中に記載する（外にフォルダをつくってエクスポートしない）。
- ここに定義する型定義の中に、そのファイルで一度しか使わない定義は入れない。
- この型定義で定義されたファイルは、すべてtypesディレクトリ直下にまとめる。

## Pokemon
決めながらやって、随時決まったらちょっと更新する。

### SummaryBookPokemon

- id: number
- name: string
- image: string
- type: Type[]

### BookPokemon

- SummaryBookPokemon &&
- abilities: object[]
  - name: string
  - description: string
- height
- weight
- species: string

## News
Contentfulから抜き出すデータ。

### SummaryNews

- id: number
- title: string
- pokemon: string
- published: Date

### News

- id: number
- title: string
- pokemon: string
- comment: string
- published: Date