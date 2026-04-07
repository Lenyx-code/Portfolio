import Title from './title'
import SubTitle from './subtitle';

// Imports existants
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


import imgSQLITE from "../assets/techno/sqlite.png"; 
import imgGIT from "../assets/techno/git.png";
import imgGITHUB from "../assets/techno/github.png";
import imgNode from "../assets/techno/node.png";
import imgFastApi from "../assets/techno/fastapi.png";

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
  { id: 14, name: "SQLite", image: imgSQLITE }, 
  { id: 7, name: "Flutter", image: imgFLUTTER },
  { id: 8, name: "Dart", image: imgDART },
  { id: 9, name: "Python", image: imgPYTHON },
  { id: 10, name: "Supabase", image: imgSUPABASE },
  { id: 11, name: "React", image: imgREACT },
  { id: 12, name: "Bootstrap", image: imgBOOTSTRAP },
  { id: 13, name: "Tailwind CSS", image: imgTAILWIND },
  { id: 15, name: "Git", image: imgGIT },       
  { id: 16, name: "GitHub", image: imgGITHUB }, 
  { id: 17, name: "Node js", image: imgNode },       
  { id: 18, name: "FastApi", image: imgFastApi }, 
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
    <div id="Mycompetence" className="py-10">
      <Title title="MES COMPETENCES ET EXPERIENCES" />
      <hr className="border-accent/30 mb-8" />

      <div className='mb-12'>
        <SubTitle subtitle='COMPETENCES' />
        <div className='flex flex-wrap gap-8 justify-center items-center mt-8'>
          {skills.map((item) => (
            <div key={item.id} className='flex flex-col items-center group'>
              <div className='p-3 w-24 h-24 rounded-full border-2 border-accent/20 group-hover:border-accent transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center bg-base-100 shadow-sm'>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className='rounded-full object-contain h-14 w-14' 
                />
              </div>
              <span className='mt-3 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity'>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SubTitle subtitle='EXPERIENCES' />
        <div className='md:ml-4 flex flex-col space-y-6 mt-6'>
          {experiences.map((exp) => (
            <div key={exp.id} className='flex flex-col bg-base-200 p-6 rounded-2xl shadow-md border border-base-300 hover:border-accent/50 transition-colors'>
              <div className='flex items-center'>
                <div className="bg-white p-2 rounded-lg">
                    <img src={exp.image} alt={exp.company} className='object-contain h-12 w-12' />
                </div>
                <div className='ml-4'>
                  <h3 className='text-xl text-accent font-bold'>
                    {exp.role} <span className="text-base-content/70 font-normal">@ {exp.company}</span>
                  </h3>
                  <span className='text-sm opacity-70 italic'>
                    {exp.period}
                  </span>
                </div>
              </div>
              <div className='mt-4'>
                <ul className='space-y-2'>
                  {exp.description.map((item, index) => (
                    <li key={index} className='list-disc ml-6 md:ml-12 text-base-content/90'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default MyCompetence;