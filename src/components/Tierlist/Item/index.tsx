import Image from 'next/image'
import * as S from './styles'

export interface ItemProps {
  name: string
  src: string
}

export const Item = ({ name, src }: ItemProps) => {
  return (
    <S.ItemContainer>
      <Image src={src} alt={name} width={96} height={96} />
    </S.ItemContainer>
  )
}
