import { Row } from '../Row'
import * as S from './styles'

export const Table = () => {
  return (
    <S.TierlistTable>
      <Row label="S" color="red" />
      <Row label="A" color="tomato" />
      <Row label="B" color="orange" />
      <Row label="C" color="amber" />
      <Row label="D" color="yellow" />
      <Row label="E" color="lime" />
    </S.TierlistTable>
  )
}
