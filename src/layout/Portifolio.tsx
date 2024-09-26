import { useEffect, useState } from "react";

interface Project {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

const Portifolio = () => {

  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState("Todos");

  useEffect(() => {
    // Fazendo a chamada à API do GitHub
    fetch("https://api.github.com/users/TheBud4/repos")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      });
  }, []);

  const filterProjects = (category: string) => {
    setActiveFilter(category);
    if (category === "Todos") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.name.includes(category))
      );
    }
  };

  return (
    <div className="p-10 w-full flex flex-col justify-between">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-4xl font-bold">Meus Projetos</h1>
        <p>Estes são alguns dos trabalhos e projetos que já realizei</p>
      </div>
      <FilterButtons activeFilter={activeFilter} onFilter={filterProjects} />
      <div className="grid grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FilterButtons = ({ activeFilter, onFilter }: any) => {
  const filters = ["Todos", "Web App", "API", "Outros"];

  return (
    <div className="flex space-x-3 mb-5">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilter(filter)}
          className={`px-4 py-2 rounded-full ${
            activeFilter === filter ? "bg-gray-800 text-white" : "bg-gray-300"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="p-5 bg-gray-200 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold">{project.name}</h2>
    <p className="mt-2">{project.description}</p>
    <a
      href={project.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 mt-4 block"
    >
      Ver no GitHub
    </a>
  </div>
);

export default Portifolio;
