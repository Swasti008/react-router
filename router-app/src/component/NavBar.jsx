import {Link,Route,Routes} from "react-router-dom"
import About from "./About"
import Home from "./Home"
import Contact from "./Contact"

export default function NavBar() {

  return (
    <>
    <nav className="navBar">
     <div className="flex">
      <Link to="/" ><h1>Kalvium 💖</h1></Link>
      <div className="flex-inside">
      <Link to="/contacts"><p>Contacts</p></Link>
      <Link to="/about" ><p>About</p></Link>
      </div>
     </div>
    </nav>
    
      <Routes>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacts" element={<Contact/>}/>
      </Routes>
      </>
  )
}


