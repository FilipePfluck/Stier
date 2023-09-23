import * as S from './styles'

type RowProps = S.RowLabelVariants & {
  label: string
}

export const Row = ({ label, color }: RowProps) => {
  return (
    <S.TierRow>
      <S.TierLabel color={color}>{label}</S.TierLabel>
    </S.TierRow>
  )
}
