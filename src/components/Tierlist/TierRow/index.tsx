'use client'

import { MdDragIndicator } from 'react-icons/md'

import * as S from './styles'
import { ForwardedRef, ReactNode, forwardRef } from 'react'
import { UniqueIdentifier } from '@dnd-kit/core'
import { HTMLStyledProps } from '@/styled-system/jsx'

export type RowProps = S.RowLabelVariants &
  HTMLStyledProps<'div'> & {
    id: UniqueIdentifier
    label: UniqueIdentifier
    children?: ReactNode
    // eslint-disable-next-line
  handleProps: React.HTMLAttributes<any>
  }

const RowComponent = (
  { label, color, handleProps, children, ...props }: RowProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <S.TierRow ref={ref} {...props}>
      <S.TierLabel color={color}>{label}</S.TierLabel>
      <S.TierItems>{children}</S.TierItems>
      <S.Actions>
        <S.Handle {...handleProps}>
          <MdDragIndicator />
        </S.Handle>
      </S.Actions>
    </S.TierRow>
  )
}

export const Row = forwardRef(RowComponent)
