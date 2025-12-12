import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import { useLanguage } from "../context/LanguageContext";

const token = import.meta.env.VITE_GITHUB_TOKEN;
const githubUser = "TheBud4";

type LanguageEdge = { node: { name: string } };

interface Repository {
  name: string;
  description: string;
  url: string;
  languages: { edges: LanguageEdge[] };
}

type GraphQLPinnedEdge = {
  node: {
    name: string;
    description: string;
    url: string;
    languages?: { edges?: LanguageEdge[] };
  };
};

type PinnedServiceRepo = {
  repo: string;
  description: string;
  link: string;
  language?: string;
};

const normalizeFromGraphQL = (edges: GraphQLPinnedEdge[]): Repository[] =>
  edges
    .map((edge) => edge?.node)
    .filter(
      (node): node is GraphQLPinnedEdge["node"] => Boolean(node?.name && node.url)
    )
    .map((node) => ({
      name: node.name,
      description: node.description ?? "",
      url: node.url,
      languages: { edges: node.languages?.edges ?? [] },
    }));

const normalizeFromFallback = (repos: PinnedServiceRepo[]): Repository[] =>
  repos.map((repo) => ({
    name: repo.repo,
    description: repo.description ?? "",
    url: repo.link,
    languages: {
      edges: repo.language ? [{ node: { name: repo.language } }] : [],
    },
  }));

const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<Repository[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    ScrollReveal().reveal(".reveal-bottom", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      opacity: 0,
      reset: false,
    });

    ScrollReveal().reveal(".reveal-left", {
      origin: "left",
      distance: "50px",
      duration: 1000,
      delay: 200,
      opacity: 0,
      reset: false,
    });

    ScrollReveal().reveal(".reveal-right", {
      origin: "right",
      distance: "50px",
      duration: 1000,
      delay: 200,
      opacity: 0,
      reset: false,
    });

    const fetchPinnedRepositories = async () => {
      try {
        if (token) {
          const query = `
            {
              user(login: "${githubUser}") {
                pinnedItems(first: 6, types: REPOSITORY) {
                  edges {
                    node {
                      ... on Repository {
                        name
                        description
                        url
                        languages(first: 5) {
                          edges {
                            node {
                              name
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          `;

          const response = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
          });

          const result = await response.json();

          if (result?.errors?.length) {
            throw new Error(result.errors[0].message);
          }

          const pinned = normalizeFromGraphQL(
            result?.data?.user?.pinnedItems?.edges ?? []
          );

          if (pinned.length) {
            setProjects(pinned);
            return;
          }
        }

        const fallbackResponse = await fetch(
          `https://gh-pinned-repos.egoist.dev/?username=${githubUser}`
        );

        if (!fallbackResponse.ok) {
          throw new Error("Falha ao buscar repositórios públicos");
        }

        const fallback = await fallbackResponse.json();
        setProjects(normalizeFromFallback(fallback));
      } catch (error) {
        console.error("Erro ao buscar projetos do GitHub", error);
      }
    };

    fetchPinnedRepositories();
  }, []);

  return (
    <div id="Portifolio" className="flex flex-col gap-8 items-center w-full px-4 mb-32">
      <div className="flex flex-col gap-y-6 justify-center sm:justify-around w-full sm:items-center text-justify sm:flex-row ">
        <h2 className="text-5xl font-black text-darkGray leading-tight reveal-left">
          {t.portfolio.titlePrefix} <br />
          <span className="text-lightGray">{t.portfolio.titleHighlight}</span>
        </h2>
        <p className="text-lightGray font-medium mt-4 reveal-right">
          {t.portfolio.subtitle}
        </p>
      </div>
      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl reveal-bottom">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-5 bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105"
          >
            <h3 className="text-xl font-bold text-darkGray mb-2">
              {project.name}
            </h3>
            <p className="text-lightGray mb-4">{project.description}</p>
            <a
              href={project.url}
              className="text-darkGray font-semibold hover:underline"
            >
              {t.portfolio.viewOnGithub}
            </a>
            <div className="mt-4">
              <strong className="block text-sm text-gray-500">
                {t.portfolio.languages}
              </strong>
              <div className="flex flex-wrap mt-1 gap-1">
                {project.languages.edges.map((lang, idx) => (
                  <span
                    key={idx}
                    className="mr-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                  >
                    {lang.node.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
