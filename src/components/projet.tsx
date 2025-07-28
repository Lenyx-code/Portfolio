import { Github, Video } from "lucide-react";
import SubTitle from "./subtitle";
import Title from "./title";

import imgFF from "../assets/projects/du_faible_au_fort.jpg"
import imgFFbackoffice from "../assets/projects/ff.png";
import imgPortfolio from "../assets/projects/portfolio.png";
import imgTransit from "../assets/projects/transit.png";
import imgGamme from "../assets/projects/gamme.png";
import imgEnc from "../assets/projects/encaissement.png";
import imgCRM from "../assets/projects/crm.png";

const projets = [
  {
   mobile : [
    {
     id : 1,
     name : "DU FAIBLE AU FORT",
     description :"Application Android : Créée à des fins pédagogiques, cette application propose un système d’authentification sécurisé, la gestion de niveaux et de thèmes (orthographe, grammaire, conjugaison), ainsi qu’une série d’exercices interactifs sous forme de phrases à trous. Elle vise à renforcer les compétences linguistiques des utilisateurs de manière progressive et ludique.",
     techno : ["Flutter", "Dart", "Mysql", "Sqlite"],
     demolink : '#',
     repolink : '#',
     image : imgFF
    }
   ],
   
   web : [
    {
     id : 1,
     name : "DU FAIBLE AU FORT (Backoffice)",
     description : "Application web : espace d'aministration pour la gestion du contenue a affichier dans au niveau du client (appli mobile) car ça fonctionne en local",
     techno : ["html", "css","Js", "php", "MysqlL", "Bootstrap"],
     demolink : "#",
     repolink : "#",
     image : imgFFbackoffice
    },
    {
     id : 2,
     name : "MON PORTFOLIO",
     description : "",
     techno : ["React", "Tailwindcss","Daisyui", "Node.js"],
     demolink : "#",
     repolink : "#",
     image : imgPortfolio
    },
   ],

   odoo : [
    {
     id : 1,
     name : "GESTION GAMMES",
     description : "Module personnalisé : destiné à gérer les différentes gammes de produits",
     techno : ["Python", "XML","Odoo","PostgreSql", "Bootstrap"],
     demolink : "#",
     repolink : "#",
     image : imgGamme
    },
    {
     id : 2,
     name : "GESTION TRANSIT",
     description : "Module personnalisé : un module pour suivre la logistisque d'une commande",
     techno : ["Python", "XML","Odoo","PostgreSql", "Bootstrap"],
     demolink : "#",
     repolink : "#",
     image : imgTransit
    },
    {
     id : 3,
     name : "GESTION ENCAISSEMENT",
     description : "Module personnalisé : créé pour suivre les différents encaiseements fait par les client",
     techno : ["Python", "XML","Odoo","PostgreSql", "Bootstrap"],
     demolink : "#",
     repolink : "#",
     image : imgEnc
    },
    {
     id : 4,
     name : "CUSTOM MODULE CRM",
     description : "Extension pour le module CRM : ajout d'une fonctionnalité pour gérer les différentes réclammations et pertes après la vente (vue list, vue formulaire et une vue kanban)",
     techno : ["Python", "XML","Odoo","PostgreSql", "Bootstrap"],
     demolink : "#",
     repolink : "#",
     image : imgCRM
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
             <p className="text-sm text-gray-400">
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
    <div className="items-center justify-center flex">
      <a href="" className="btn btn-accent">Voir plus</a>
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
             <p className="text-sm text-gray-400">
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
        <div className="items-center justify-center flex">
      <a href="" className="btn btn-accent">Voir plus</a>
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
             <p className="text-sm text-gray-400">
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
        <div className="items-center justify-center flex">
      <a href="" className="btn btn-accent">Voir plus</a>
    </div>
   </div>
  </div>
 );
};

export default Projets;