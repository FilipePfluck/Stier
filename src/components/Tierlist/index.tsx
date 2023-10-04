import {
  CollisionDetection,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  DropAnimation,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  closestCenter,
  defaultDropAnimationSideEffects,
  getFirstCollision,
  pointerWithin,
  rectIntersection,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from '@dnd-kit/sortable'
import { useCallback, useEffect, useRef, useState } from 'react'

import { coordinateGetter } from '@/utils/multipleContainersKeyboardCoordinates'
import { Flex } from '@/styled-system/jsx'
import { TierRow } from './TierRow/styles'
import { Row } from './TierRow'
import { SortableRow } from './TierRow/SortableRow'
import { createPortal } from 'react-dom'
import { Item } from './Item'

type Items = Record<UniqueIdentifier, UniqueIdentifier[]>
type Colors = Record<
  UniqueIdentifier,
  | 'red'
  | 'tomato'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'cyan'
  | 'indigo'
  | 'plum'
  | 'violet'
  | 'grass'
  | 'jade'
  | 'crimsom'
  | undefined
>

const dropAnimation: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: '0.6',
      },
    },
  }),
}

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

export const Tierlist = () => {
  const [isInClient, setIsInClient] = useState(false)

  const [items, setItems] = useState<Items>({
    S: [
      'charmander',
      'treecko',
      'torchic',
      'mudkip',
      'turtwig',
      'piplup',
      'chimchar',
      'froakie',
      'rowlet',
    ],
    A: ['squirtle', 'totodile', 'cyndaquil', 'oshawott', 'fuecoco'],
    B: [
      'bulbasaur',
      'chikorita',
      'snivy',
      'tepig',
      'fennekin',
      'grookey',
      'quaxly',
      'sprigatito',
    ],
    C: ['chespin', 'litten', 'popplio', 'scorbunny'],
    D: ['sobble'],
  })
  const [clonedItems, setClonedItems] = useState<Items | null>(null)
  const [containers, setContainers] = useState(
    Object.keys(items) as UniqueIdentifier[],
  )
  const [containersColors, setContainersColors] = useState<Colors>({
    S: 'red',
    A: 'tomato',
    B: 'orange',
    C: 'amber',
    D: 'yellow',
    E: 'lime',
  })

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)
  const lastOverId = useRef<UniqueIdentifier | null>(null)
  const recentlyMovedToNewContainer = useRef(false)

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter,
    }),
  )

  useEffect(() => {
    setIsInClient(true)
  }, [])

  const collisionDetectionStrategy: CollisionDetection = useCallback(
    (args) => {
      if (activeId && activeId in items) {
        return closestCenter({
          ...args,
          droppableContainers: args.droppableContainers.filter(
            (container) => container.id in items,
          ),
        })
      }

      // Start by finding any intersecting droppable
      const pointerIntersections = pointerWithin(args)
      const intersections =
        pointerIntersections.length > 0
          ? // If there are droppables intersecting with the pointer, return those
            pointerIntersections
          : rectIntersection(args)
      let overId = getFirstCollision(intersections, 'id')

      if (overId != null) {
        if (overId in items) {
          const containerItems = items[overId]

          // If a container is matched and it contains items (columns 'A', 'B', 'C')
          if (containerItems.length > 0) {
            // Return the closest droppable within that container
            overId = closestCenter({
              ...args,
              droppableContainers: args.droppableContainers.filter(
                (container) =>
                  container.id !== overId &&
                  containerItems.includes(container.id),
              ),
            })[0]?.id
          }
        }

        lastOverId.current = overId

        return [{ id: overId }]
      }

      // When a draggable item moves to a new container, the layout may shift
      // and the `overId` may become `null`. We manually set the cached `lastOverId`
      // to the id of the draggable item that was moved to the new container, otherwise
      // the previous `overId` will be returned which can cause items to incorrectly shift positions
      if (recentlyMovedToNewContainer.current) {
        lastOverId.current = activeId
      }

      // If no droppable is matched, return the last match
      return lastOverId.current ? [{ id: lastOverId.current }] : []
    },
    [activeId, items],
  )

  const findContainer = (id: UniqueIdentifier) => {
    if (id in items) {
      return id
    }

    return Object.keys(items).find((key) => items[key].includes(id))
  }

  const handleDragStart = ({ active }: DragStartEvent) => {
    setActiveId(active.id)
    setClonedItems(items)
  }

  const handleDragOver = ({ active, over }: DragOverEvent) => {
    const overId = over?.id

    // if it is over nothing, or over a container (they can be sorted too), do nothing
    if (overId == null || active.id in items) {
      return
    }

    const overContainer = findContainer(overId)
    const activeContainer = findContainer(active.id)

    if (!overContainer || !activeContainer) {
      return
    }

    if (activeContainer !== overContainer) {
      setItems((items) => {
        const activeItems = items[activeContainer]
        const overItems = items[overContainer]
        const overIndex = overItems.indexOf(overId)
        const activeIndex = activeItems.indexOf(active.id)

        let newIndex: number

        if (overId in items) {
          newIndex = overItems.length + 1
        } else {
          const isBelowOverItem =
            over &&
            active.rect.current.translated &&
            active.rect.current.translated.top >
              over.rect.top + over.rect.height

          const modifier = isBelowOverItem ? 1 : 0

          newIndex =
            overIndex >= 0 ? overIndex + modifier : overItems.length + 1
        }

        recentlyMovedToNewContainer.current = true

        return {
          ...items,
          [activeContainer]: items[activeContainer].filter(
            (item) => item !== active.id,
          ),
          [overContainer]: [
            ...items[overContainer].slice(0, newIndex),
            items[activeContainer][activeIndex],
            ...items[overContainer].slice(
              newIndex,
              items[overContainer].length,
            ),
          ],
        }
      })
    }
  }

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id in items && over?.id) {
      setContainers((containers) => {
        const activeIndex = containers.indexOf(active.id)
        const overIndex = containers.indexOf(over.id)

        return arrayMove(containers, activeIndex, overIndex)
      })
    }

    const activeContainer = findContainer(active.id)

    if (!activeContainer) {
      setActiveId(null)
      return
    }

    const overId = over?.id

    if (overId == null) {
      setActiveId(null)
      return
    }

    const overContainer = findContainer(overId)

    if (overContainer) {
      const activeIndex = items[activeContainer].indexOf(active.id)
      const overIndex = items[overContainer].indexOf(overId)

      if (activeIndex !== overIndex) {
        setItems((items) => ({
          ...items,
          [overContainer]: arrayMove(
            items[overContainer],
            activeIndex,
            overIndex,
          ),
        }))
      }
    }

    setActiveId(null)
  }

  const handleDragCancel = () => {
    if (clonedItems) {
      // Reset items to their original state in case items have been
      // Dragged across containers
      setItems(clonedItems)
    }

    setActiveId(null)
    setClonedItems(null)
  }

  const renderSortableRowOverlay = (id: UniqueIdentifier) => {
    return (
      <Row
        label={id}
        id={id as string}
        color={containersColors[id]}
        handleProps={{}}
      >
        {items[id].map((itemId) => (
          <Item
            key={itemId}
            id={itemId as string}
            name={pokemon[itemId].name}
            src={pokemon[itemId].src}
          />
        ))}
      </Row>
    )
  }

  const renderSortableItemOverlay = (id: UniqueIdentifier) => {
    return (
      <Item
        key={id}
        id={id as string}
        name={pokemon[id].name}
        src={pokemon[id].src}
        overlay
      />
    )
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={collisionDetectionStrategy}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <Flex direction="column" maxW="1200px" w="full">
        <SortableContext items={containers}>
          {containers.map((containerId) => (
            <SortableRow
              key={containerId}
              label={containerId}
              id={containerId as string}
              color={containersColors[containerId]}
              items={items[containerId]}
            />
          ))}
        </SortableContext>
      </Flex>
      {isInClient &&
        createPortal(
          <DragOverlay adjustScale dropAnimation={dropAnimation}>
            {activeId
              ? containers.includes(activeId)
                ? renderSortableRowOverlay(activeId)
                : renderSortableItemOverlay(activeId)
              : null}
          </DragOverlay>,
          document.body,
        )}
    </DndContext>
  )
}
