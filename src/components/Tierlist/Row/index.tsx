'use client'

import {
  AnimateLayoutChanges,
  SortableContext,
  defaultAnimateLayoutChanges,
  rectSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { Flex } from '@/styled-system/jsx'
import { Item, ItemProps } from '../Item'
import * as S from './styles'
import { ReactNode } from 'react'
import { SortableItem } from '../Item/SortableItem'

type RowProps = S.RowLabelVariants & {
  id: string
  label: string
  itemsIds: string[]
  children?: ReactNode
  allItems: {
    [key: string]: ItemProps
  }
}

export const Row = ({ label, color, itemsIds, id, allItems }: RowProps) => {
  const animateLayoutChanges: AnimateLayoutChanges = (args) =>
    defaultAnimateLayoutChanges({ ...args, wasDragging: true })

  const { setNodeRef, transition, transform } = useSortable({
    id,
    data: {
      type: 'container',
      children: itemsIds,
    },
    animateLayoutChanges,
  })

  return (
    <S.TierRow
      ref={setNodeRef}
      style={{ transition, transform: CSS.Translate.toString(transform) }}
    >
      <S.TierLabel color={color}>{label}</S.TierLabel>
      <SortableContext items={itemsIds} strategy={rectSortingStrategy}>
        <S.TierItems>
          {itemsIds.map((itemId) => (
            <SortableItem
              key={itemId}
              id={itemId}
              name={allItems[itemId].name}
              src={allItems[itemId].src}
            />
          ))}
        </S.TierItems>
      </SortableContext>
    </S.TierRow>
  )
}
