'use client'

import { Reorder } from 'framer-motion'

import { Item } from '../Item'
import * as S from './styles'
import { useState } from 'react'

const initialItems = [
  {
    id: 'Chikorita1',
    name: 'Chikorita',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/152.png',
  },
  {
    id: 'Chikorita2',
    name: 'Chikorita',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/152.png',
  },
  {
    id: 'Chikorita3',
    name: 'Chikorita',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/152.png',
  },
  {
    id: 'Chikorita4',
    name: 'Chikorita',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/152.png',
  },
  {
    id: 'Cyndaquil1',
    name: 'Cyndaquil',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/155.png',
  },
  {
    id: 'Cyndaquil2',
    name: 'Cyndaquil',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/155.png',
  },
  {
    id: 'Cyndaquil3',
    name: 'Cyndaquil',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/155.png',
  },
  {
    id: 'Cyndaquil4',
    name: 'Cyndaquil',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/155.png',
  },
  {
    id: 'Totodile1',
    name: 'Totodile',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/158.png',
  },
  {
    id: 'Totodile2',
    name: 'Totodile',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/158.png',
  },
  {
    id: 'Totodile3',
    name: 'Totodile',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/158.png',
  },
  {
    id: 'Totodile4',
    name: 'Totodile',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/158.png',
  },
]

export const Unused = () => {
  const [items, setItems] = useState(initialItems)

  return (
    <S.UnusedGrid>
      {items.map(({ id, name, src }) => (
        <Item key={id} name={name} src={src} />
      ))}
    </S.UnusedGrid>
  )
}
