interface TierlistProps {
  params: {
    slug: string
  }
}

const Tierlist = ({ params }: TierlistProps) => {
  return <p>Tierlist: {params.slug}</p>
}

export default Tierlist
