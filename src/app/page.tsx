import { Table } from '@/components/Tierlist/Table'
import { css } from '@/styled-system/css'

export default function Home() {
  return (
    <h1>
      <div className={css({ p: '20' })}>
        <Table />
      </div>
    </h1>
  )
}
