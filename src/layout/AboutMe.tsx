import pfp from '/PFP.png';
import Technology from '../components/Tecnology';
import nodejs from '/icons/NodeJs.svg';
import html from '/icons/HTML.svg';
import css from '/icons/CSS.svg';
import git from '/icons/GIT.svg';
import typescript from '/icons/Typescript.svg';
import csharp from '/icons/Csharp.svg';
import react from '/icons/React.svg';
import tailwind from '/icons/Tailwind.svg';

export function AboutMe (){
return (
  <div className="flex flex-col w-full items-center gap-y-12">
    <img src={pfp} alt="foto de perfil" />
    <h1>About Me</h1>
    <p>
      Meu nome é Murilo Pistore, sou um Desenvolvedor de Software em fase de
      aprendizado, moro em Medianeira-PR, Basil e estudo Ciências da Computação
      na Universidade Tecnológica Federal do Paraná - UTFPR
    </p>
    <h2>Minhas Tecnologias</h2>
    <div className='flex gap-x-6'>
      <Technology icon={nodejs} altText="NodeJs" />
      <Technology icon={html} altText="Html5" />
      <Technology icon={css} altText="Css3" />
      <Technology icon={git} altText="GIT" />
      <Technology icon={typescript} altText="Typescript" />
      <Technology icon={csharp} altText="Csharp" />
      <Technology icon={react} altText="React" />
      <Technology icon={tailwind} altText="Tailwind" />
    </div>
  </div>
);
}

export default AboutMe;