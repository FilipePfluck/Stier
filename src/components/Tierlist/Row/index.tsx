import { Flex } from '@/styled-system/jsx'
import { Item, ItemProps } from '../Item'
import * as S from './styles'

type RowProps = S.RowLabelVariants & {
  label: string
  rowItems: ItemProps[]
}

export const Row = ({ label, color, rowItems }: RowProps) => {
  return (
    <S.TierRow>
      <S.TierLabel color={color}>{label}</S.TierLabel>
      <Flex flex="1" align="center" gap="2" p="2">
        {rowItems.map(({ name, src }) => (
          <Item key={name} src={src} name={name} />
        ))}
      </Flex>
    </S.TierRow>
  )
}
