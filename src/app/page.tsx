import { Table } from '@/components/Tierlist/Table'
import { Unused } from '@/components/Tierlist/Unused'
import { css } from '@/styled-system/css'
import { Flex } from '@/styled-system/jsx'

export default function Home() {
  return (
    <h1>
      <Flex p="20" gap="8" direction="column">
        <Table />
        <Unused />
      </Flex>
    </h1>
  )
}
