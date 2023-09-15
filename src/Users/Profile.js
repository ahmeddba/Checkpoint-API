import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'

const Profile = ({users}) => {
    const {id} = useParams()
    const [user, setUser] = React.useState({})
    const navigate = useNavigate()

useEffect(() => {
const userr = users.find(user => user.id === parseInt(id))
setUser(userr);
},[id , users])
console.log(user)
  return (
  <>
  <h1>Profile Card</h1>
  <div style={{display : 'flex' , justifyContent : 'center' , alignItems : 'center' , marginTop : '20px'}}>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg" />
      <Card.Body>
        <Card.Title>{user?.name}</Card.Title>
        <Card.Text>
          Address: {user?.address?.city}, {user?.address?.street}, {user?.address?.suite}
        </Card.Text>
        <Card.Text>
          Phone number: {user?.phone}
        </Card.Text>
        <Button onClick={() => navigate(-1)} variant="primary">Back to list</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default Profile
