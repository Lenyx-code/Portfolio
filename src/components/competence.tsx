import Title from './title'
import SubTitle from './subtitle';

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgPOSTGRE from "../assets/techno/Postgre.png";
import imgMYSQL from "../assets/techno/mysql.svg";
import imgPYTHON from "../assets/techno/Python.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgDART from "../assets/techno/dart_logo.webp";
import imgFLUTTER from "../assets/techno/flutter.png";
import imgSUPABASE from "../assets/techno/supabase.png";
import imgPHP from "../assets/techno/php.png";
import imgBOOTSTRAP from "../assets/techno/Bootstrap_logo.png";
import imgCrtv from "../assets/companies/crtv-logo.png";
import imgFreelance from "../assets/companies/franlance.png";
import imgOpeneng from "../assets/companies/OE.png";






const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "JavaScript", image: imgJS },
  { id: 4, name: "PHP", image: imgPHP },
  { id: 5, name: "MySQL", image: imgMYSQL },
  { id: 6, name: "PostgreSQL", image: imgPOSTGRE },
  { id: 7, name: "Flutter", image: imgFLUTTER },
  { id: 8, name: "Dart", image: imgDART },
  { id: 9, name: "Python", image: imgPYTHON },
  { id: 10, name: "Supabase", image: imgSUPABASE },
  { id: 11, name: "React", image: imgREACT },
  { id: 12, name: "Bootstrap", image: imgBOOTSTRAP },
  { id: 13, name: "Tailwind CSS", image: imgTAILWIND },
];


const experiences = [
  {
    id: 1,
    role: "Stagiaire",
    company: "CRTV",
    period: "Juin 2022 - Août 2022",
    description: [
      "Analyse et évaluation de l’application de gestion de présence.",
      "Proposition d’améliorations techniques et fonctionnelles."
    ],
    image: imgCrtv,
  },
  {
    id: 2,
    role: "Développeur Mobile Freelance",
    company: "Freelance",
    period: "Depuis Octobre 2024",
    description: [
      "Développement d’une application mobile avec Flutter.",
      "Maintenance continue et évolutions fonctionnelles selon les besoins."
    ],
    image: imgFreelance,
  },
  {
    id: 3,
    role: "Stagiaire",
    company: "Open Engineering",
    period: "Août 2024 - Aujourd'hui",
    description: [
      "Formation des utilisateurs sur le terrain à l’usage des outils développés sur L'ERP Odoo.",
      "Développement de modules odoo personnalisés selon les besoins métier."
    ],
    image: imgOpeneng,
  },
];



const MyCompetence = () => {
 return (
  <div id="Mycompetence">
   <Title  title = "MES COMPETENCES ET EXPRERIENCE"/>
   <hr />
    <div className=''>
     <SubTitle subtitle='COMPETENCES'/>
       <div className='flex flex-wrap gap-4 justify-center items-center  mt-4 md:mt-0'>
        {
         skills.map((item) => (
          <div key={item.id} className='flex justify-center flex-col'>
            <div className='p-2 w-34 h-24 rounded-full border-2 border-accent'>
             <img src={item.image} alt={item.name} className='rounded-full object-cover h-full w-full' />
            </div>
            <span className='mt-2 text-sm'>
             {item.name}
            </span>
          </div>
         ))
       }
       </div>
    </div>
    <div>
       <SubTitle subtitle='EXPERIENCES'/>
       <div className='md:ml-4 flex flex-col space-y-4'>
        {
         experiences.map((exp) => (
          <div key={exp.id} className='flex flex-col bg-base-200 p-5 rounded-xl shadow-lg'>
            <div className='flex items-center'>
             <img src={exp.image} alt={exp.company} className='object-cover h-12 w-12' />
             <div className='ml-4'>
              <h1 className='text-xl text-accent text-bold'>
               {exp.role} , {exp.company}
              </h1>
              <span className='text-sm'>
               {exp.period}
              </span>
             </div>
            </div>
            <div>
             <ul>
              {
               exp.description.map((item, index) => (
                <li key={index} className='list-disc ml-16 mt-2'>
                 {item}
                </li> 
               ))
              }
             </ul>
            </div>
          </div>
         ))
        }
       </div>
    </div>
  </div>
 )
};

export default MyCompetence;
