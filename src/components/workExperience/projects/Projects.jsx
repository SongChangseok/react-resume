import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <div>
      {projects.map(({ id, ...others }) => (
        <Project key={id} {...others} />
      ))}
    </div>
  );
};

export default Projects;
