import { ArrowRight, ExternalLink, Github, GithubIcon } from "lucide-react";
import Project1JPG from "../projects/project1.jpg";
import Project2JPG from "../projects/project2.jpg";
import Project3JPG from "../projects/project3.png";

const projects = [
    {
        id: 1,
        title: "X clone",
        description: "A clone of X (Twitter) made using purely Tailwindcss .",
        image: Project1JPG,
        tags: ["TailwindCSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/ToufikIIT/WEBD/tree/main/src",
    },
    {
        id: 2,
        title: "Banking System",
        description:
            "A banking system made in java with user authentication and payment processing.",
        image: Project2JPG,
        tags: ["JAVA"],
        demoUrl: "#",
        githubUrl: "https://github.com/ToufikIIT/Banking-System",
    },
    {
        id: 3,
        title: "Music app",
        description:
            "Full-featured music playing platform with interactive interface and all functionalities",
        image: Project3JPG,
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "#",
        githubUrl: "https://github.com/ToufikIIT/WEBD",
    },
];

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/ToufikIIT"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}