import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {


  const navItem = <>
    <li>
      <NavLink to="/" activeClassName="active" className="nav-link">
        Home
      </NavLink>
    </li>

    <li>
      <NavLink to="/about"  activeClassName="active" className="nav-link">
        About
      </NavLink>
    </li>

    <li>
      <NavLink to="/" activeClassName="active" className="nav-link">
        Contact
      </NavLink>
    </li>

    <li>
      <NavLink to="/" activeClassName="active" className="nav-link">
        Download CV
      </NavLink>
    </li>
  </>


  return (
    <div className="navbar bg-slate-900 container mx-auto ">

<div className="navbar-end">

<div className="dropdown">
  <div tabIndex={0} role="button" className="btn 
  btn-neutral lg:hidden">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h8m-8 6h16" />
    </svg>

  </div>
  <ul
    tabIndex={0}
    className="menu menu-sm text-white dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
    {navItem}
  </ul>
</div>


</div>


      <a className="btn btn-ghost text-xl text-white">WelCome to my Portfolio</a>
      

      <div className="navbar-end ">

        <ul className="hidden lg:flex gap-5 text-2xl font-bold text-white">

     
            {navItem}
         

        </ul>
      </div>



    

    </div>
  );
};

export default NavBar;