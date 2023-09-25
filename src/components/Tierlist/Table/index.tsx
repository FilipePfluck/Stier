import { Row } from '../Row'
import * as S from './styles'

export const Table = () => {
  return (
    <S.TierlistTable>
      <Row
        label="S"
        color="red"
        rowItems={[
          {
            name: 'Charmander',
            src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
          },
        ]}
      />
      <Row
        label="A"
        color="tomato"
        rowItems={[
          {
            name: 'Squirtle',
            src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
          },
        ]}
      />
      <Row label="B" color="orange" rowItems={[]} />
      <Row
        label="C"
        color="amber"
        rowItems={[
          {
            name: 'Bulbasaur',
            src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
          },
        ]}
      />
      <Row label="D" color="yellow" rowItems={[]} />
      <Row label="E" color="lime" rowItems={[]} />
    </S.TierlistTable>
  )
}
