import { Card, CardBody } from 'reactstrap'

const CardUser = ({ user }) => {
  return (
    <Card className='text-center mt-3 mb-4'>
        <img src={user.avatar_url} className='img-thumbnail image' alt="" />
        <CardBody>
            <div className='text-primary'>Name: {user.name}</div>
            <div className='text-primary'>Bio: {user.bio}</div>
            <div className='text-primary'>Location: {user.location}</div>
            <div className='text-primary'>Followers: {user.followers}</div>
            <div className='text-primary'>Available for hire: {user.hireable ? 'Yes' : 'No'}</div>
        </CardBody>
    </Card>
  )
}

export default CardUser