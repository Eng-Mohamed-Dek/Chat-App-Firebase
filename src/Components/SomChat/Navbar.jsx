import { signOut } from "firebase/auth"
import { auth } from "../../../firebase"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"

const Navbar = () => {
  const { currentUser } = useContext(AuthContext)
  
  return (
    <div className='navbar'>
      <span className="logo">
        {currentUser.displayName}
      </span>
      <div className="user">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s" />
        <button onClick={()=>signOut(auth)}> logout</button>
      </div>
    </div>
  )
}

export default Navbar