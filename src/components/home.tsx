import { Mail } from "lucide-react";
import img from "../assets/img2.jpg";

const Home = () => {
  return (
    <div id="Home" className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 lg:px-32 py-10 md:py-32 gap-10">
      
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Salut, <br /> je suis
          <span className="ml-2 text-accent">LenyxDev</span>
        </h1>

        <p className="my-6 text-base sm:text-lg md:text-md leading-relaxed">
          Jeune développeur passionné, <br />
          je me consacre à la création de projets innovants alliant créativité,
          performance et utilité. Curieux et engagé, <br />
          je cherche constamment à relever de nouveaux défis techniques
          pour concevoir des solutions modernes et impactantes. <br />
          N'hésitez pas à me contacter.
        </p>

        <a href="#" className="btn btn-accent flex items-center gap-2 mt-2 w-fit">
          <Mail className="w-5 h-5" />
          Contactez-moi
        </a>
      </div>

      <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
        <img
          src={img}
          alt="LenyxDev"
          className="w-full h-full object-cover border-8 border-accent shadow-xl"
          style={{
            borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
