import { useSortable } from '@dnd-kit/sortable'
import { Item, ItemProps } from '.'
import { CSS } from '@dnd-kit/utilities'

export const SortableItem = ({ id, name, src }: ItemProps) => {
  const { setNodeRef, listeners, isDragging, transform, transition } =
    useSortable({
      id,
    })

  return (
    <Item
      ref={setNodeRef}
      id={id}
      name={name}
      src={src}
      isDragging={isDragging}
      style={{ transition, transform: CSS.Translate.toString(transform) }}
      {...listeners}
    />
  )
}
