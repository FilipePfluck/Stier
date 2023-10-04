import { AnimateLayoutChanges, useSortable } from '@dnd-kit/sortable'
import { Item, ItemProps } from '.'

type SortableItemProps = ItemProps & {
  useDragOverlay?: boolean
  animateLayoutChanges?: AnimateLayoutChanges
}

export const SortableItem = ({
  id,
  name,
  src,
  animateLayoutChanges,
  useDragOverlay,
}: SortableItemProps) => {
  const {
    setNodeRef,
    listeners,
    attributes,
    isDragging,
    transform,
    transition,
  } = useSortable({
    id,
    animateLayoutChanges,
  })

  return (
    <Item
      setNodeRef={setNodeRef}
      id={id}
      name={name}
      src={src}
      isDragging={isDragging}
      transform={transform}
      transition={transition}
      overlay={!useDragOverlay && isDragging}
      {...listeners}
      {...attributes}
    />
  )
}
