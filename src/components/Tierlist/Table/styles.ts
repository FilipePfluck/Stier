import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const TierlistTable = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
    },
  }),
)
