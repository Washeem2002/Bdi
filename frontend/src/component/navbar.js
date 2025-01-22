
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import './navbar.css';
const Nav=()=>{
  const token = localStorage.getItem("tokken");
    const navigate=useNavigate();
    return(
      
        <>
         <div className="replace_navbar"></div>
        <div className="header">
            <div className="logo"><Link to="/"   className="l"> Law-App Software</Link></div>
            <div className="cat">
            <div className="link"><Link to="/Family Lawyers" className="c" > Family Lawyers</Link></div>
            <div className="link"><Link to="/Civil Lawyers" className="c" >Civil Lawyers</Link></div>
            <div className="link"><Link to="/Labour Service Lawyers"  className="c" >Labour Service Lawyers</Link></div>
            {/* <div><Link to="/Beauty"  className="c">Beauty</Link></div> */}
            </div>
            <div className="search" onClick={()=>{navigate("/search")}}><input type="text" placeholder="Search Lawyers" ></input><FontAwesomeIcon icon={faMagnifyingGlass} className="i" /></div>
            
            {(token!=null)
          ?<><div className="a"><Link to="/add" className="c" >  Add Patients Details</Link></div>
          <div className="link" ><Link to="/profile"  className="c">Profile</Link></div></>
          : <div className="link"><Link to="/Login" className="c">Login</Link></div>
        }
        </div>
     </>
    )
}
export default Nav;