import './Navbar.css'
import { Link } from 'react-router'
function Navbar() {
    return (
        <div className='header'>
            <div>
               <Link className="link"> <h1>Todo App</h1></Link>
            </div>

            <div className='nav'>
                <ul>
                    <li><Link className="link" to="/">Home</Link> </li>
                    <li><Link className="link" to="/about">About</Link></li>
                    <li><Link className="link" to="/contact">Contact</Link></li>
                </ul>
            </div>


        </div>
    )
}
export default Navbar