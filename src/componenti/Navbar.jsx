import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <NavLink to= "/">Home Page</NavLink>
            <NavLink to= "/aboutus">Chi siamo</NavLink>
            <NavLink to= "/prodotti">Prodotti</NavLink>
        </nav>
    )
}

export default Navbar