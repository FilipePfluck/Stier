import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const ItemContainer = styled(
  'button',
  cva({
    base: {
      h: '24',
      w: '24',
      rounded: 'lg',
      bg: { base: 'gray.4', _hover: 'gray.5' },
      cursor: 'pointer',
      transition: '0.2s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    variants: {
      isDragging: {
        true: {
          boxShadow: '2xl',
        },
        false: {
          boxShadow: 'none',
        },
      },
    },
    defaultVariants: {
      isDragging: false,
    },
  }),
)
