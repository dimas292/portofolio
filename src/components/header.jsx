import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa";
export default function Header() {
    return (
    <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px'}}>
        <h1>Logo <span><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" style={{width: '20px', height: '20px'}} /></span></h1>
        <div style={{position: "relative"}}>
        <input type="search" name="" id=""style={{borderRadius : "10px", padding: "4px"}} placeholder="Search" />
        <button style={{background: "none", border: "none", padding: "0", position: "absolute", top: "50%", left: "90%", transform: "translate(-50%, -50%)", cursor: "pointer"}}><span><FaSearch /></span></button>
        </div>
        <ul style={{display: 'flex', gap: '20px', listStyleType: 'none', padding: '0', margin: '0'}}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
        </ul>

    </header>
    )
}