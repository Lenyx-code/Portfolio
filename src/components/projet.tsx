import { Github, Video } from "lucide-react";
import SubTitle from "./subtitle";
import Title from "./title";

const projets = [
  {
   mobile : [
    {
     id : 1,
     name : "DU FAIBLE AU FORT",
     description : "Application mobile pédagogique,",
     techno : ["Flutter", "Dart", "Mysql", "Sqlite"],
     demolink : '#',
     repolink : '#',
     image : ""
    }
   ],
   
   web : [
    {
     id : 1,
     name : "DU FAIBLE AU FORT (Backoffice),",
     description : "Application web",
     techno : ["html", "css","Js", "php", "MysqlL", "Bootstrap"],
     demolink : "#",
     repolink : "#",
     image : ""
    },
    {
     id : 2,
     name : "MON PORTFOLIO,",
     description : "",
     techno : ["React", "Tailwindcss","Daisyui", "Node.js"],
     demolink : "#",
     repolink : "#",
     image : ""
    },
   ],

   odoo : [
    {
     id : 1,
     name : "GESTION GAMME,",
     description : "Module personnalisé",
     techno : ["Python", "XML","Odoo","PostgreSql", "Bootstrap"],
     demolink : "#",
     repolink : "#",
     image : ""
    },
    {
     id : 2,
     name : "GESTION TRANSIT,",
     description : "Module personnalisé",
     techno : ["Python", "XML","Odoo","PostgreSql", "Bootstrap"],
     demolink : "#",
     repolink : "#",
     image : ""
    },
    {
     id : 3,
     name : "GESTION EMPLOI DE TEMPS,",
     description : "Module personnalisé",
     techno : ["Python", "XML","Odoo","PostgreSql", "Bootstrap"],
     demolink : "#",
     repolink : "#",
     image : ""
    },
   ]

  }
]

const Projets = () => {
 return (
  <div id="Projet">
   <Title title="MES PROJETS" />
   <hr className="m-4"/>
   <div>
    <SubTitle subtitle="DEVELOPPEMENT MOBILE"/>
    <div className="grid md:grid-cols-3 gap-4">
      {
        projets.map((pro) => (
          pro.mobile.map((mob) => (
           <div key={mob.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">
            <img src={mob.image} alt={mob.name}  className="rounded-xl w-full h-56 object-cover"/>
            <div>
             <h1>{ mob.name }</h1>
             <p className="text-sm">
              {
               mob.description
              }
             </p>
            </div>
            <div className="flex flex-wrap gap-3 my-3">
             {
              mob.techno.map((tech) => (
               <span className="ml-4 badge badge-accent badge-sm" >{tech}</span>
              ))
             }
            </div>
            <div className="flex">
             <a href={mob.demolink}  className="btn btn-accent w-2/3 ml-2">
              Demo
              <Video className="w-4"/>
             </a>
             <a href={mob.demolink} className="btn btn-neutral w-1/3 ml-2">
              Github
              <Github className="w-4"/>
             </a>
            </div>
           </div>
          ))
        ))
      }
    </div>
   </div>
   <div>
    <SubTitle subtitle="DEVELOPPEMENT WEB"/>
    <div className="grid md:grid-cols-3 gap-4">
      {
        projets.map((pro) => (
          pro.web.map((w) => (
           <div key={w.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">
            <img src={w.image} alt={w.name}  className="rounded-xl w-full h-56 object-cover"/>
            <div>
             <h1>{ w.name }</h1>
             <p className="text-sm">
              {
               w.description
              }
             </p>
            </div>
            <div className="flex flex-wrap gap-3 my-3">
             {
              w.techno.map((tech) => (
               <span className="ml-4 badge badge-accent badge-sm" >{tech}</span>
              ))
             }
            </div>
            <div className="flex">
             <a href={w.demolink}  className="btn btn-accent w-2/3 ml-2">
              Demo
              <Video className="w-4"/>
             </a>
             <a href={w.demolink} className="btn btn-neutral w-1/3 ml-2">
              Github
              <Github className="w-4"/>
             </a>
            </div>
           </div>
          ))
        ))
      }
    </div>
   </div>
   <div>
    <SubTitle subtitle="ERP ODOO"/>
    <div className="grid md:grid-cols-3 gap-4">
      {
        projets.map((pro) => (
          pro.odoo.map((o) => (
           <div key={o.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">
            <img src={o.image} alt={o.name}  className="rounded-xl w-full h-56 object-cover"/>
            <div>
             <h1>{ o.name }</h1>
             <p className="text-sm">
              {
               o.description
              }
             </p>
            </div>
            <div className="flex flex-wrap gap-3 my-3">
             {
              o.techno.map((tech) => (
               <span className="ml-4 badge badge-accent badge-sm" >{tech}</span>
              ))
             }
            </div>
            <div className="flex">
             <a href={o.demolink}  className="btn btn-accent w-2/3 ml-2">
              Demo
              <Video className="w-4"/>
             </a>
             <a href={o.demolink} className="btn btn-neutral w-1/3 ml-2">
              Github
              <Github className="w-4"/>
             </a>
            </div>
           </div>
          ))
        ))
      }
    </div>
   </div>
  </div>
 );
};

export default Projets;