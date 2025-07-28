import { Container } from "lucide-react";

const Navbar = () => {
 return (
  <div className="flex justify-center md:justify-between items-center p-4">
   <a href="" className="flex items-center font-bold text-3xl md:text-xl">
    <Container className="mr-2" />
    LENYX
    <span className="text-accent">DEV</span>
   </a>

   <ul className="hidden md:flex space-x-4">
    <li>
     <a href="#Home" className="btn btn-sm btn-ghost">
      Accueil
     </a>
    </li>
    <li>
     <a href="#About" className="btn btn-sm btn-ghost">
      A propos
     </a>
    </li>
    <li>
     <a href="#Mycompetence" className="btn btn-sm btn-ghost">
      Mes compétences
     </a>
    </li>
    <li>
     <a href="#Projet" className="btn btn-sm btn-ghost">
      Mes projets
     </a>
    </li>
   </ul>

  </div>
 )
}

export default Navbar;