import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/all";
function Navigation() {
  return (
    <>
    <nav className="navbar">
      <ul>
        <img src="https://celebaltech.com/assets/img/celebal.webp"></img>
        <li className='navbarlist'>
          <Link to="/">
            Page1
            <IoMdArrowDropdown />
          </Link>
        </li>
        <li className='navbarlist'>
          <Link to="/page2">
            Page2 <IoMdArrowDropdown />
          </Link>
        </li>
        <li className='navbarlist'>
          <Link to="/page3">
            Page3
            <IoMdArrowDropdown />
          </Link>
        </li>
        <li className='navbarlist'>
          <Link to="/page4">
            Page4
            <IoMdArrowDropdown />
          </Link>
        </li>
        <li className='navbarlist'>
          <Link to="/page5">
            Page5
            <IoMdArrowDropdown />
          </Link>
        </li>
        <li className='navbarlist'>
          <Link to="/page6">
            Page6
            <IoMdArrowDropdown />
          </Link>
        </li>
        <li className='navbarlist'>
          <Link to="/page7">
            Page7
            <IoMdArrowDropdown />
          </Link>
        </li>
        <li className='navbarlist'>
          <Link to="/page8">
            Page8
            <IoMdArrowDropdown />
          </Link>
        </li>
        <li className='navbarlist'>
          <Link to="/page9">
            Page9
            <IoMdArrowDropdown />
          </Link>
        </li>
        <li className='navbarlist'>
          <Link to="/page10">
            Page10
            <IoMdArrowDropdown />
          </Link>
        </li>
      </ul>
    </nav>
    </>
  );
}
export default Navigation;
