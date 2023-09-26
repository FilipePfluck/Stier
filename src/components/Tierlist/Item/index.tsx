'use client'

import Image from 'next/image'
import * as S from './styles'
import { useState } from 'react'

export interface ItemProps {
  name: string
  src: string
}

export const Item = ({ name, src }: ItemProps) => {
  const [isDragging, setIsDragging] = useState(false)

  return (
    <S.ItemContainer isDragging={isDragging}>
      <Image draggable="false" src={src} alt={name} width={96} height={96} />
    </S.ItemContainer>
  )
}
