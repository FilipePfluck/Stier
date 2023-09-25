import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const UnusedGrid = styled(
  'ul',
  cva({
    base: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, 96px)',
      gap: '2',
    },
  }),
)
