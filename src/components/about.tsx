import Title from './title'
import img from "../assets/img2.jpg"
import { Chrome, Figma, LetterText, Package, Smartphone } from 'lucide-react';


const aboutSections = [
  {
    id: 1,
    title: "Développeur Backend",
    description: "Je conçois des API robustes et performantes en respectant les bonnes pratiques de sécurité et d'architecture logicielle.",
    icon : <LetterText  className='text-accent'/>
  },
  {
    id: 2,
    title: "Développeur Mobile",
    description: "Je développe des applications mobiles intuitives et modernes principalement avec Flutter pour Android et iOS.",
    icon : <Smartphone  className='text-accent'/>
  },
  {
    id: 3,
    title: "Développeur Web",
    description: "Je crée des interfaces web réactives et dynamiques, en utilisant des technologies modernes comme React, TailwindCSS etc...",
    icon : <Chrome  className='text-accent'/>
  },
  {
    id: 4,
    title: "Création de modules personnalisés Odoo",
    description: "J'adapte Odoo aux besoins spécifiques des entreprises en développant des modules sur mesure pour automatiser les processus métier.",
    icon: <Package  className='text-accent'/>
  },
  {
    id: 5,
    title: "Apprenti Designer UI/UX",
    description: "J'apprends à concevoir des interfaces claires et ergonomiques avec Figma afin d'améliorer l'expérience utilisateur de mes applications.",
    icon: <Figma  className='text-accent'/>
  }
];



const About = () => {
 return (
 <div id="About"  className="bg-base-300 p-10 mb-10 md:mb-32">
   <Title title="A propos"/>
   <div className='md:h-screen flex justify-center items-center'>
    <div className='hidden md:block'>
     <img
          src={img}
          alt="LenyxDev"
          className="w-96 object-cover rounded-xl"/>
    </div>

    <div className='md:ml-4 space-y-2'>
     {aboutSections.map((section)=> (
       <div key={section.id} className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl  shadow-xl">
         <div className='mb-2 md:mb-0'>{section.icon}</div>

         <div className='md:ml-4 text-center md:text-left'>
          <h2 className='text-xl font-bold mb-1'>
           {section.title}
          </h2>
          <p className='text-sm'>
           {section.description}
          </p>
         </div>
       </div>
     ))}
    </div>
   </div>
 </div>

 );
};

export default About;