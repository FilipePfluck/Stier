import { RecipeVariantProps, cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const TierRow = styled(
  'div',
  cva({
    base: {
      w: 'full',
      minH: '20',
      bg: 'gray.3',
      borderTop: '1px solid token(colors.gray.1)',
      borderX: '1px solid token(colors.gray.1)',
      display: 'flex',
      _first: {
        borderTopRadius: 'lg',
      },
      _last: {
        borderBottomRadius: 'lg',
        borderBottom: '1px solid token(colors.gray.1)',
      },
      overflow: 'hidden',
    },
  }),
)

const tierLabelStyles = cva({
  base: {
    w: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '1px solid token(colors.gray.1)',
  },
  variants: {
    color: {
      indigo: {
        bg: 'indigo.9',
        color: 'white',
      },
      violet: {
        bg: 'violet.9',
        color: 'white',
      },
      plum: {
        bg: 'plum.9',
        color: 'white',
      },
      crimsom: {
        bg: 'crimsom.9',
        color: 'white',
      },
      red: {
        bg: 'red.9',
        color: 'white',
      },
      tomato: {
        bg: 'tomato.9',
        color: 'white',
      },
      orange: {
        bg: 'orange.9',
        color: 'white',
      },
      amber: {
        bg: 'amber.9',
        color: 'black',
      },
      yellow: {
        bg: 'yellow.10',
        color: 'black',
      },
      lime: {
        bg: 'lime.9',
        color: 'black',
      },
      grass: {
        bg: 'grass.9',
        color: 'white',
      },
      jade: {
        bg: 'jade.9',
        color: 'white',
      },
      cyan: {
        bg: 'cyan.9',
        color: 'white',
      },
    },
  },
})

export const TierLabel = styled('div', tierLabelStyles)

export type RowLabelVariants = RecipeVariantProps<typeof tierLabelStyles>
