interface TierlistProps {
  params: {
    user: string
  }
}

const UserTierlist = ({ params }: TierlistProps) => {
  return <p>Tierlist of user: {params.user}</p>
}

export default UserTierlist
