import {
  AnimateLayoutChanges,
  SortableContext,
  defaultAnimateLayoutChanges,
  rectSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable'
import { Row, RowProps } from '../TierRow'
import { UniqueIdentifier } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { SortableItem } from '../Item/SortableItem'

const animateLayoutChanges: AnimateLayoutChanges = (args) =>
  defaultAnimateLayoutChanges({ ...args, wasDragging: true })

type SortableRowProps = {
  id: UniqueIdentifier
  items: UniqueIdentifier[]
} & Omit<RowProps, 'handleProps'>

type Pokemon = {
  [key: string]: {
    name: string
    src: string
  }
}

const pokemon: Pokemon = {
  charmander: {
    name: 'Charmander',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
  },
  squirtle: {
    name: 'Squirle',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
  },
  bulbasaur: {
    name: 'Bulbasaur',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
  },
  chikorita: {
    name: 'Chikorita',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/152.png',
  },
  totodile: {
    name: 'Totodile',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/158.png',
  },
  cyndaquil: {
    name: 'Cyndaquil',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/155.png',
  },
  treecko: {
    name: 'Treecko',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/252.png',
  },
  torchic: {
    name: 'Torchic',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/255.png',
  },
  mudkip: {
    name: 'Mudkip',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/258.png',
  },
  turtwig: {
    name: 'Turtwig',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/387.png',
  },
  chimchar: {
    name: 'Chimchar',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/390.png',
  },
  piplup: {
    name: 'Piplup',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/393.png',
  },
  snivy: {
    name: 'Snivy',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/495.png',
  },
  tepig: {
    name: 'Tepig',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/498.png',
  },
  oshawott: {
    name: 'Oshawott',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/501.png',
  },
  chespin: {
    name: 'Chespin',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/650.png',
  },
  fennekin: {
    name: 'Fennekin',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/653.png',
  },
  froakie: {
    name: 'Froakie',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/656.png',
  },
  rowlet: {
    name: 'Rowlet',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/722.png',
  },
  litten: {
    name: 'Litten',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/725.png',
  },
  popplio: {
    name: 'Popplio',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/728.png',
  },
  grookey: {
    name: 'Grookey',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/810.png',
  },
  scorbunny: {
    name: 'Scorbunny',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/813.png',
  },
  sobble: {
    name: 'Sobble',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/816.png',
  },
  sprigatito: {
    name: 'Sprigatito',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/906.png',
  },
  fuecoco: {
    name: 'Fuecoco',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/909.png',
  },
  quaxly: {
    name: 'Quaxly',
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/912.png',
  },
}

export const SortableRow = ({ id, items, ...props }: SortableRowProps) => {
  const {
    active,
    attributes,
    isDragging,
    listeners,
    over,
    setNodeRef,
    transition,
    transform,
  } = useSortable({
    id,
    data: {
      type: 'container',
      children: items,
    },
    animateLayoutChanges,
  })

  return (
    <Row
      id={id}
      ref={setNodeRef}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
        opacity: isDragging ? 0.6 : undefined,
      }}
      handleProps={{
        ...listeners,
        ...attributes,
      }}
      {...props}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        {items.map((id) => (
          <SortableItem
            key={id}
            id={id as string}
            name={pokemon[id]?.name}
            src={pokemon[id]?.src}
            useDragOverlay
          />
        ))}
      </SortableContext>
    </Row>
  )
}
