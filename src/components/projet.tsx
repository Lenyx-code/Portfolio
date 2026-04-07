import { Lock, Layers, Code2, Globe, ArrowUpRight } from "lucide-react"; 
import Title from "./title";

// Tes imports d'images
import imgFF from "../assets/projects/du_faible_au_fort.jpg";
import imgFFbackoffice from "../assets/projects/ff.png";
import imgPortfolio from "../assets/projects/portfolio.png";
import imgTransit from "../assets/projects/transit.png";
import imgGamme from "../assets/projects/gamme.png";
import imgEnc from "../assets/projects/encaissement.png";
import imgCRM from "../assets/projects/crm.png";

const projetsData = {
  mobile: [
    { id: 1, name: "DU FAIBLE AU FORT", description: "Application Android pédagogique avec système d’authentification, gestion de niveaux et exercices interactifs.", techno: ["Flutter", "Dart", "MySQL", "SQLite"], image: imgFF }
  ],
  web: [
    { id: 1, name: "Backoffice - DU FAIBLE AU FORT ", description: "Espace d'administration complet pour la gestion du contenu dynamique de l'écosystème mobile.", techno: ["JS", "PHP", "MySQL", "Bootstrap"], image: imgFFbackoffice },
    { id: 2, name: "Portfolio V2", description: "Site vitrine moderne optimisé pour la performance et l'expérience utilisateur.", techno: ["React", "TailwindCSS", "DaisyUI", "Vite"], image: imgPortfolio }
  ],
  odoo: [
    { id: 1, name: "Gestion Gammes", description: "Module Odoo pour la structuration et le management des gammes de produits industriels.", techno: ["Python", "XML", "Odoo", "PostgreSQL"], image: imgGamme },
    { id: 2, name: "Gestion Transit", description: "Solution logistique de suivi en temps réel pour l'acheminement des commandes complexes.", techno: ["Python", "XML", "Odoo", "PostgreSQL"], image: imgTransit },
    { id: 3, name: "Gestion Encaissement", description: "Optimisation du flux financier et suivi rigoureux des paiements clients.", techno: ["Python", "XML", "Odoo", "PostgreSQL"], image: imgEnc },
    { id: 4, name: "Extension CRM", description: "Customisation avancée pour la gestion des réclamations SAV via vues Kanban.", techno: ["Python", "XML", "Odoo", "PostgreSQL"], image: imgCRM }
  ]
};

const ProjectCard = ({ project, icon: Icon } : any) => (
  <div className="group relative bg-base-200/50 backdrop-blur-sm rounded-[2rem] overflow-hidden border border-white/5 hover:border-accent/40 transition-all duration-500 shadow-2xl flex flex-col h-full">
    
    {/* Media Section */}
    <div className="relative h-56 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-base-900/80 to-transparent opacity-60 z-10" />
      <img 
        src={project.image} 
        alt={project.name}  
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      
      {/* Type Badge */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
        <Icon className="w-3.5 h-3.5 text-accent" />
        <span className="text-[10px] font-bold text-white tracking-widest uppercase">Project</span>
      </div>
    </div>

    {/* Content Section */}
    <div className="p-8 flex flex-col flex-grow relative">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
          {project.name}
        </h3>
        <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
      </div>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-8">
  {project.techno.map((tech: string, index: number) => (
    <span 
      key={index} 
      className="px-3 py-1 text-[10px] font-bold text-accent/90 bg-accent/5 border border-accent/20 rounded-lg"
    >
      {tech}
    </span>
  ))}
</div>

      {/* Footer info */}
      <div className="mt-auto flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-2 text-[11px] font-medium text-gray-400">
          <Lock className="w-3 h-3" />
          <span>Confidentiel</span>
        </div>
        <div className="h-[1px] flex-grow mx-4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <span className="text-[9px] font-black uppercase tracking-tighter text-gray-500">Odoo / Dev</span>
      </div>
    </div>
  </div>
);

const Projets = () => {
  return (
    <section id="Projet" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <Title title="PORTFOLIO" />
        <p className="text-gray-500 mt-2 font-medium tracking-[0.2em] uppercase text-xs">Mes dernières réalisations</p>
        <div className="w-12 h-1 bg-accent mx-auto mt-6 rounded-full" />
      </div>

      {/* Mapping Categories */}
      {[
        { title: "Développement Mobile", data: projetsData.mobile, icon: Layers },
        { title: "Développement Web", data: projetsData.web, icon: Globe },
        { title: "Écosystème Odoo", data: projetsData.odoo, icon: Code2 }
      ].map((section, idx) => (
        <div key={idx} className="mb-24 last:mb-12">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] w-8 bg-accent/50" />
            <h2 className="text-lg font-bold tracking-widest uppercase text-white/90">
              {section.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {section.data.map((p) => (
              <ProjectCard key={p.id} project={p} icon={section.icon} />
            ))}
          </div>
        </div>
      ))}

      {/* CTA Button */}
      <div className="flex justify-center mt-12">
        <button className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 hover:text-accent">
            <span className="absolute inset-0 w-full h-full border-2 border-white/10 rounded-2xl group-hover:border-accent group-hover:scale-105 transition-all duration-300"></span>
            <span className="relative flex items-center gap-2 tracking-widest text-sm">
                PLUS SUR GITHUB <ArrowUpRight className="w-4 h-4" />
            </span>
        </button>
      </div>
    </section>
  );
};

export default Projets;