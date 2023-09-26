import { Row } from '../Row'
import * as S from './styles'

const pokemons = {
  charmander: {
    id: 'charmander',
    name: 'Charmander',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
  },
  squirtle: {
    id: 'squirtle',
    name: 'Squirtle',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
  },
  bulbasaur: {
    id: 'bulbasaur',
    name: 'Bulbasaur',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
  },
}

export const Table = () => {
  return (
    <S.TierlistTable>
      <Row
        id="S"
        label="S"
        color="red"
        itemsIds={['charmander']}
        allItems={pokemons}
      />
      <Row
        id="A"
        label="A"
        color="tomato"
        itemsIds={['squirtle', 'bulbasaur']}
        allItems={pokemons}
      />
      <Row id="B" label="B" color="orange" itemsIds={[]} allItems={pokemons} />
      <Row id="C" label="C" color="amber" itemsIds={[]} allItems={pokemons} />
      <Row id="D" label="D" color="yellow" itemsIds={[]} allItems={pokemons} />
      <Row id="E" label="E" color="lime" itemsIds={[]} allItems={pokemons} />
    </S.TierlistTable>
  )
}
