'use client'

import { Tierlist } from '@/components/Tierlist'
import { Flex } from '@/styled-system/jsx'

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Tierlist />
    </Flex>
  )
}
