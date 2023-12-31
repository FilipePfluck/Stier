import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const Wrapper = styled(
  'li',
  cva({
    base: {
      h: '24',
      w: '24',
      display: 'flex',
      transform: `
        translate3d(var(--translate-x, 0), var(--translate-y, 0), 0) 
        scaleX(var(--scale-x, 1)) 
        scaleY(var(--scale-y, 1))
      `,
      transformOrigin: '0 0',
      touchAction: 'manipulation',
      outline: 'none',
    },
    variants: {
      fadeIn: {
        true: {
          animation: `fadeIn 500ms ease`,
        },
        false: {},
      },
      overlay: {
        true: {
          '--scale': 1.12,
          '--box-shadow': `
            0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05), 
            0 1px calc(3px / var(--scale-x, 1)) 0 rgba(34, 33, 35, 0.15)
          `,
          '--box-shadow-picked-up': `
            0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05),
            -1px 0 30px 0 rgba(34, 33, 35, 0.2),
            0px 15px 30px 0 rgba(34, 33, 35, 0.4)
          `,
          zIndex: 999,
        },
        false: {},
      },
    },
  }),
)

export const Item = styled(
  'div',
  cva({
    base: {
      position: 'relative',
      display: 'flex',
      flexGrow: '1',
      alignItems: 'center',
      paddingX: '2',
      paddingY: '2',
      bg: { base: 'gray.4', _hover: 'gray.5' },
      outline: 'none',
      borderRadius: 'calc(4px / var(--scale-x, 1))',
      listStyle: 'none',
      transformOrigin: '50% 50%',

      WebkitTapHighlightColor: 'transparent',
      touchAction: 'manipulation',
      cursor: 'grab',

      color: 'gray.800',
      fontWeight: '400',
      fontSize: '1rem',
      whiteSpace: 'nowrap',

      transform: 'scale(var(--scale, 1))',
      transition: 'box-shadow 200ms cubic-bezier(0.18, 0.67, 0.6, 1.22)',

      _focusVisible: {
        boxShadow: `
          0 0px 4px 1px #4c9ffe, 
          0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05), 
          0 1px calc(3px / var(--scale-x, 1)) 0 rgba(34, 33, 35, 0.05)
        `,
      },
    },
    variants: {
      overlay: {
        true: {
          cursor: 'grabbing',
          animation: 'pop 200ms cubic-bezier(0.18, 0.67, 0.6, 1.22)',
          transform: 'scale(var(--scale))',
          boxShadow: 'var(--box-shadow-picked-up)',
          opacity: 1,
        },
        false: {},
      },
      isDragging: {
        true: {},
        false: {},
      },
    },
    compoundVariants: [
      {
        isDragging: true,
        overlay: false,
        css: {
          opacity: 'var(--draging-opacity, 0.5)',
          zIndex: 0,

          _focus: {
            boxShadow:
              '0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05), 0 1px calc(3px / var(--scale-x, 1)) 0 rgba(34, 33, 81, 0.15)',
          },
        },
      },
    ],
  }),
)
