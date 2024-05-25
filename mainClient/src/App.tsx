import { signInWithPopup} from 'firebase/auth'
import { auth, provider } from './firebase/firebase'
import axios from 'axios'

function App() {

  const handleClick = async () => {
    signInWithPopup(auth, provider)
      .then(async (data) => {
        await axios.post('/api/mainAuth/google-up', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: data.user.email,
            username: data.user.displayName,
            googlePhotoUrl: data.user.photoURL,
            id: data.user.uid,
            password: data.user.email
          })
        })
        .then((data) => {
          console.log(data)
        })
        .catch((error) => {
          console.log(error)
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleSign = async () => {
    signInWithPopup(auth, provider)
      .then(async (data) => {
        await axios.post('/api/mainAuth/google-in', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: data.user.uid,
            password: data.user.email
          })
        })
        .then((data) => {
          console.log(data)
        })
        .catch((error) => {
          console.log(error)
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  return (
    <>
      <button onClick={handleClick} className="">
        sign up
      </button>
      <button onClick={handleSign} className="">
        sign in
      </button>
    </>
  )
}


export default App
