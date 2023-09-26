import Image from 'next/image'
import * as S from './styles'
import { ForwardedRef, HTMLProps, forwardRef } from 'react'

export interface ItemProps extends HTMLProps<HTMLButtonElement> {
  id: string
  name: string
  src: string
}

const ItemComponent = (
  {
    name,
    src,
    isDragging,
  }: ItemProps & { isDragging?: boolean; shadow?: boolean },
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <S.ItemContainer ref={ref} isDragging={isDragging}>
      <Image draggable="false" src={src} alt={name} width={96} height={96} />
    </S.ItemContainer>
  )
}

export const Item = forwardRef(ItemComponent)
