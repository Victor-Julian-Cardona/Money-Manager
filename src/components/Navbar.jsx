import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth.context"

const Navbar = () => {
    
    const { logOutUser, getToken } = useContext(AuthContext)

  return (
    <nav>
        <Link to='/'>Home</Link>
        {
            !getToken() &&
            <>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
            </>
        }

        {
            getToken() &&
            <button>Logout</button>
        }
    </nav>
  )
}

export default Navbar