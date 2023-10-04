import Image from 'next/image'
import * as S from './styles'
import { HTMLProps } from 'react'
import { Transform } from '@dnd-kit/utilities'
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities'

export interface ItemProps extends HTMLProps<HTMLButtonElement> {
  id: string
  name: string
  src: string
  transition?: string
  transform?: Transform | null
  overlay?: boolean
  listeners?: SyntheticListenerMap | undefined
  setNodeRef?: (node: HTMLElement | null) => void
}

export const Item = ({
  name,
  src,
  isDragging,
  transform,
  transition,
  overlay,
  setNodeRef,
  listeners,
  ...props
}: ItemProps & { isDragging?: boolean; shadow?: boolean }) => {
  return (
    <S.Wrapper
      {...props}
      ref={setNodeRef}
      style={{
        transition,
        // eslint-disable-next-line
        // @ts-ignore
        '--translate-x': transform ? `${Math.round(transform.x)}px` : undefined,
        '--translate-y': transform ? `${Math.round(transform.y)}px` : undefined,
        '--scale-x': transform?.scaleX ? `${transform.scaleX}` : undefined,
        '--scale-y': transform?.scaleY ? `${transform.scaleY}` : undefined,
      }}
      isDragging={isDragging}
      tabIndex={-1}
      overlay={overlay}
    >
      <S.Item
        tabIndex={0}
        isDragging={isDragging}
        overlay={overlay}
        {...listeners}
      >
        <Image draggable="false" src={src} alt={name} width={96} height={96} />
      </S.Item>
    </S.Wrapper>
  )
}
